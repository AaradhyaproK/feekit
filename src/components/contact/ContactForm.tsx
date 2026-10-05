'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Personalized Software Project (Snab Innovations)',
    budget: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const isSoftwareProject =
    formData.subject.includes('Software') ||
    formData.subject.includes('Fintech') ||
    formData.subject.includes('Custom');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mgawlaan', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          budget: formData.budget || 'Not specified',
          message: formData.message,
          source: 'FeeKit Contact Form — Snab Innovations',
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: 'Personalized Software Project (Snab Innovations)',
          budget: '',
          message: '',
        });
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit form. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please email hello@snab.co.in directly.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50/70 p-8 text-center space-y-4 animate-in fade-in duration-300">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-emerald-950">Message Delivered Successfully!</h3>
          <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Your note has been securely forwarded to <strong>Snab Innovations</strong>. Our team will review your inquiry and get back to you within 24 business hours.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="rounded-xl bg-white border border-emerald-300 px-4 py-2 text-xs font-semibold text-emerald-900 hover:bg-emerald-50 transition-colors shadow-2xs"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
      <div className="space-y-1">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Send Us a Direct Message</h2>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Inquire about custom software development with Snab Innovations, report a tax rate correction, or request new features:
        </p>
      </div>

      {status === 'error' && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 text-rose-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold">Submission failed: {errorMessage}</p>
            <p>
              You can also email us directly at{' '}
              <a href="mailto:hello@snab.co.in" className="font-bold underline">
                hello@snab.co.in
              </a>.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold text-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block mb-1.5 text-slate-800">
              Your Name or Company <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-name"
              required
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Alex Morgan (Fintech Founder)"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-sky-600 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block mb-1.5 text-slate-800">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="contact-email"
              required
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="alex@company.com"
              className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-sky-600 focus:bg-white focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-subject" className="block mb-1.5 text-slate-800">
            Inquiry Category <span className="text-rose-500">*</span>
          </label>
          <select
            id="contact-subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-sky-600 focus:bg-white focus:outline-none transition-colors"
          >
            <option value="Personalized Software Project (Snab Innovations)">
              🚀 Build Personalized Software Project (Snab Innovations)
            </option>
            <option value="Custom Fintech / Calculator Development">
              🧮 Custom Fintech / Interactive Calculator Engine
            </option>
            <option value="Rate Update or Correction">
              📊 Tax Rate Update / Municipal Surtax Correction
            </option>
            <option value="Feature Request / New Tool">
              💡 Feature Request / Suggest New Tool
            </option>
            <option value="Partnership or Sponsorship">
              🤝 B2B Partnership / Sponsored Placement
            </option>
            <option value="General Question">
              💬 General Question
            </option>
          </select>
        </div>

        {isSoftwareProject && (
          <div className="rounded-xl border border-sky-100 bg-sky-50/50 p-3.5 space-y-1.5 animate-in fade-in duration-200">
            <label htmlFor="contact-budget" className="block text-[11px] font-bold text-sky-900">
              Estimated Project Budget / Scope (Optional)
            </label>
            <select
              id="contact-budget"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full rounded-lg border border-sky-200 bg-white py-2 px-3 text-xs text-slate-800 focus:border-sky-600 focus:outline-none"
            >
              <option value="">Select an approximate range...</option>
              <option value="Under $2,500">MVP / Interactive Calculator ($1,000 – $2,500)</option>
              <option value="$2,500 - $10,000">Full Web Application / SaaS ($2,500 – $10,000)</option>
              <option value="$10,000 - $25,000">Enterprise Fintech Suite ($10,000 – $25,000)</option>
              <option value="$25,000+">Custom Large-Scale Platform ($25,000+)</option>
              <option value="Consultation">Need Technical Consultation First</option>
            </select>
          </div>
        )}

        <div>
          <label htmlFor="contact-message" className="block mb-1.5 text-slate-800">
            Project Overview or Feedback <span className="text-rose-500">*</span>
          </label>
          <textarea
            id="contact-message"
            required
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder={
              isSoftwareProject
                ? 'Describe the software, calculator, or web app you would like Snab Innovations to engineer (requirements, target audience, timeline)...'
                : 'Describe your feedback, question, or suggested correction...'
            }
            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-2.5 px-3.5 text-xs text-slate-900 focus:border-sky-600 focus:bg-white focus:outline-none transition-colors"
          />
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-xl bg-sky-600 py-3 text-center text-xs font-bold text-white shadow-xs hover:bg-sky-700 disabled:opacity-60 transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Sending Message...</span>
            </>
          ) : (
            <>
              <Send className="h-3.5 w-3.5" />
              <span>Send Message to Snab Innovations</span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-slate-400 font-normal">
          Submissions are delivered directly to Snab Innovations via secure encrypted transmission.
        </p>
      </form>
    </div>
  );
}
