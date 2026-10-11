import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, source } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const apiKey = process.env.KIT_API_KEY || process.env.CONVERTKIT_API_KEY;
    const tagId = process.env.KIT_TAG_ID || '24509507';

    if (!apiKey) {
      console.error('KIT_API_KEY environment variable is not configured.');
      return NextResponse.json(
        { error: 'Newsletter service is temporarily unavailable.' },
        { status: 500 }
      );
    }

    // Subscribe to Kit.com (ConvertKit) tag
    const kitResponse = await fetch(
      `https://api.convertkit.com/v3/tags/${tagId}/subscribe`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          api_key: apiKey,
          email: cleanEmail,
          fields: {
            source: typeof source === 'string' ? source.slice(0, 100) : 'FeeKit Website',
          },
        }),
      }
    );

    const kitData = await kitResponse.json();

    if (!kitResponse.ok) {
      console.error('Kit.com subscribe error:', kitData);

      // Fallback: also log to Formspree backup if Kit returned an error
      try {
        await fetch('https://formspree.io/f/mgawlaan', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: cleanEmail,
            source: source || 'FeeKit Website',
            fallbackFrom: 'kit_api_error',
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (backupErr) {
        console.error('Formspree backup error:', backupErr);
      }

      return NextResponse.json(
        { error: kitData.message || 'Failed to subscribe to newsletter.' },
        { status: kitResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Subscribed successfully to FeeKit Newsletter.',
      subscriptionId: kitData.subscription?.id,
    });
  } catch (error) {
    console.error('Newsletter subscribe route exception:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing subscription.' },
      { status: 500 }
    );
  }
}
