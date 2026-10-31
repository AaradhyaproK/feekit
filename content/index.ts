import type { PageContent } from './types.ts';
import alabamaSalesTaxContent from "./sales-tax/alabama.ts";
import alaskaSalesTaxContent from "./sales-tax/alaska.ts";
import arizonaSalesTaxContent from "./sales-tax/arizona.ts";
import arkansasSalesTaxContent from "./sales-tax/arkansas.ts";
import californiaSalesTaxContent from "./sales-tax/california.ts";
import coloradoSalesTaxContent from "./sales-tax/colorado.ts";
import connecticutSalesTaxContent from "./sales-tax/connecticut.ts";
import delawareSalesTaxContent from "./sales-tax/delaware.ts";
import districtOfColumbiaSalesTaxContent from "./sales-tax/district-of-columbia.ts";
import floridaSalesTaxContent from "./sales-tax/florida.ts";
import georgiaSalesTaxContent from "./sales-tax/georgia.ts";
import hawaiiSalesTaxContent from "./sales-tax/hawaii.ts";
import idahoSalesTaxContent from "./sales-tax/idaho.ts";
import illinoisSalesTaxContent from "./sales-tax/illinois.ts";
import indianaSalesTaxContent from "./sales-tax/indiana.ts";
import iowaSalesTaxContent from "./sales-tax/iowa.ts";
import kansasSalesTaxContent from "./sales-tax/kansas.ts";
import kentuckySalesTaxContent from "./sales-tax/kentucky.ts";
import louisianaSalesTaxContent from "./sales-tax/louisiana.ts";
import maineSalesTaxContent from "./sales-tax/maine.ts";
import marylandSalesTaxContent from "./sales-tax/maryland.ts";
import massachusettsSalesTaxContent from "./sales-tax/massachusetts.ts";
import michiganSalesTaxContent from "./sales-tax/michigan.ts";
import minnesotaSalesTaxContent from "./sales-tax/minnesota.ts";
import mississippiSalesTaxContent from "./sales-tax/mississippi.ts";
import missouriSalesTaxContent from "./sales-tax/missouri.ts";
import montanaSalesTaxContent from "./sales-tax/montana.ts";
import nebraskaSalesTaxContent from "./sales-tax/nebraska.ts";
import nevadaSalesTaxContent from "./sales-tax/nevada.ts";
import newHampshireSalesTaxContent from "./sales-tax/new-hampshire.ts";
import newJerseySalesTaxContent from "./sales-tax/new-jersey.ts";
import newMexicoSalesTaxContent from "./sales-tax/new-mexico.ts";
import newYorkSalesTaxContent from "./sales-tax/new-york.ts";
import northCarolinaSalesTaxContent from "./sales-tax/north-carolina.ts";
import northDakotaSalesTaxContent from "./sales-tax/north-dakota.ts";
import ohioSalesTaxContent from "./sales-tax/ohio.ts";
import oklahomaSalesTaxContent from "./sales-tax/oklahoma.ts";
import oregonSalesTaxContent from "./sales-tax/oregon.ts";
import pennsylvaniaSalesTaxContent from "./sales-tax/pennsylvania.ts";
import rhodeIslandSalesTaxContent from "./sales-tax/rhode-island.ts";
import southCarolinaSalesTaxContent from "./sales-tax/south-carolina.ts";
import southDakotaSalesTaxContent from "./sales-tax/south-dakota.ts";
import tennesseeSalesTaxContent from "./sales-tax/tennessee.ts";
import texasSalesTaxContent from "./sales-tax/texas.ts";
import utahSalesTaxContent from "./sales-tax/utah.ts";
import vermontSalesTaxContent from "./sales-tax/vermont.ts";
import virginiaSalesTaxContent from "./sales-tax/virginia.ts";
import washingtonSalesTaxContent from "./sales-tax/washington.ts";
import westVirginiaSalesTaxContent from "./sales-tax/west-virginia.ts";
import wisconsinSalesTaxContent from "./sales-tax/wisconsin.ts";
import wyomingSalesTaxContent from "./sales-tax/wyoming.ts";
import softwareEngineerContent from './freelance/software-engineer.ts';
import { frontendDeveloperContent } from './freelance/frontend-developer.ts';
import { backendDeveloperContent } from './freelance/backend-developer.ts';
import { fullstackDeveloperContent } from './freelance/fullstack-developer.ts';
import { uiUxDesignerContent } from './freelance/ui-ux-designer.ts';
import { copywriterContent } from './freelance/copywriter.ts';
import { devopsEngineerContent } from './freelance/devops-engineer.ts';
import { seoSpecialistContent } from './freelance/seo-specialist.ts';
import { digitalMarketerContent } from './freelance/digital-marketer.ts';
import { productManagerContent } from './freelance/product-manager.ts';
import { technicalWriterContent } from './freelance/technical-writer.ts';
import { dataScientistContent } from './freelance/data-scientist.ts';
import { ukContractorContent } from './freelance/uk-contractor.ts';
import { aiEngineerContent } from './freelance/ai-engineer.ts';
import { productDesignerContent } from './freelance/product-designer.ts';
import { mobileAppDeveloperContent } from './freelance/mobile-app-developer.ts';
import { smartContractDeveloperContent } from './freelance/smart-contract-developer.ts';
import { cloudArchitectContent } from './freelance/cloud-architect.ts';
import { indieHackerContent } from './freelance/indie-hacker.ts';
import { fractionalCtoContent } from './freelance/fractional-cto.ts';
import { fractionalCmoContent } from './freelance/fractional-cmo.ts';
import { shopifyDeveloperContent } from './freelance/shopify-developer.ts';
import { uxResearcherContent } from './freelance/ux-researcher.ts';
import { cybersecurityAnalystContent } from './freelance/cybersecurity-analyst.ts';
import { financialModelerContent } from './freelance/financial-modeler.ts';
import { videoEditorContent } from './freelance/video-editor.ts';
import { motionGraphicsDesignerContent } from './freelance/motion-graphics-designer.ts';
import { socialMediaManagerContent } from './freelance/social-media-manager.ts';
import { growthHackerContent } from './freelance/growth-hacker.ts';
import { contentStrategistContent } from './freelance/content-strategist.ts';
import { brandDesignerContent } from './freelance/brand-designer.ts';
import { voiceActorContent } from './freelance/voice-actor.ts';
import { illustratorContent } from './freelance/illustrator.ts';
import { virtualAssistantContent } from './freelance/virtual-assistant.ts';
import { prSpecialistContent } from './freelance/pr-specialist.ts';
import { businessAnalystContent } from './freelance/business-analyst.ts';
import { executiveCoachContent } from './freelance/executive-coach.ts';
import stripeUsaContent from './gateways/stripe-usa.ts';
import { unitedKingdomVatContent } from './vat/united-kingdom.ts';
import { germanyVatContent } from './vat/germany.ts';
import { franceVatContent } from './vat/france.ts';
import { spainVatContent } from './vat/spain.ts';
import { italyVatContent } from './vat/italy.ts';
import { irelandVatContent } from './vat/ireland.ts';
import { australiaVatContent } from './vat/australia.ts';
import { canadaVatContent } from './vat/canada.ts';
import { netherlandsVatContent } from './vat/netherlands.ts';
import { belgiumVatContent } from './vat/belgium.ts';
import { polandVatContent } from './vat/poland.ts';
import { swedenVatContent } from './vat/sweden.ts';
import { austriaVatContent } from './vat/austria.ts';
import { denmarkVatContent } from './vat/denmark.ts';
import { finlandVatContent } from './vat/finland.ts';
import { portugalVatContent } from './vat/portugal.ts';
import { greeceVatContent } from './vat/greece.ts';
import { czechRepublicVatContent } from './vat/czech-republic.ts';
import { romaniaVatContent } from './vat/romania.ts';
import { hungaryVatContent } from './vat/hungary.ts';
import { slovakiaVatContent } from './vat/slovakia.ts';
import { bulgariaVatContent } from './vat/bulgaria.ts';
import { croatiaVatContent } from './vat/croatia.ts';
import { lithuaniaVatContent } from './vat/lithuania.ts';
import { sloveniaVatContent } from './vat/slovenia.ts';
import { latviaVatContent } from './vat/latvia.ts';
import { estoniaVatContent } from './vat/estonia.ts';
import { cyprusVatContent } from './vat/cyprus.ts';
import { luxembourgVatContent } from './vat/luxembourg.ts';
import { maltaVatContent } from './vat/malta.ts';
import { amazonFbaPrivateLabelContent } from './ecommerce/amazon-fba-private-label.ts';
import { amazonFbaArbitrageContent } from './ecommerce/amazon-fba-arbitrage.ts';
import { amazonFbaElectronicsContent } from './ecommerce/amazon-fba-electronics.ts';
import { amazonFbaApparelContent } from './ecommerce/amazon-fba-apparel.ts';
import { amazonFbaBeautyContent } from './ecommerce/amazon-fba-beauty.ts';
import { shopifyDropshippingContent } from './ecommerce/shopify-dropshipping.ts';
import { shopifyApparelBrandContent } from './ecommerce/shopify-apparel-brand.ts';
import { shopifySupplementsContent } from './ecommerce/shopify-supplements.ts';
import { etsyHandmadeJewelryContent } from './ecommerce/etsy-handmade-jewelry.ts';
import { etsyDigitalDownloadsContent } from './ecommerce/etsy-digital-downloads.ts';
import { etsyCustomApparelContent } from './ecommerce/etsy-custom-apparel.ts';
import { etsyPrintOnDemandContent } from './ecommerce/etsy-print-on-demand.ts';
import { ebayElectronicsContent } from './ecommerce/ebay-electronics.ts';
import { ebayVintageCollectiblesContent } from './ecommerce/ebay-vintage-collectibles.ts';
import { ebayRefurbishedTechContent } from './ecommerce/ebay-refurbished-tech.ts';
import { directToConsumerSkincareContent } from './ecommerce/direct-to-consumer-skincare.ts';
import { tiktokShopDropshippingContent } from './ecommerce/tiktok-shop-dropshipping.ts';
import { woocommerceB2bContent } from './ecommerce/woocommerce-b2b.ts';
import { subscriptionBoxProfitContent } from './ecommerce/subscription-box-profit.ts';
import { highTicketDropshippingContent } from './ecommerce/high-ticket-dropshipping.ts';
import { amazonFbaFeeCalculatorContent } from './ecommerce/amazon-fba-fee-calculator.ts';
import usdToEurContent from './wise/usd-to-eur.ts';
import usdToGbpContent from './wise/usd-to-gbp.ts';
import gbpToEurContent from './wise/gbp-to-eur.ts';
import eurToUsdContent from './wise/eur-to-usd.ts';
import usdToInrContent from './wise/usd-to-inr.ts';
import cadToUsdContent from './wise/cad-to-usd.ts';
import audToUsdContent from './wise/aud-to-usd.ts';
import usdToBrlContent from './wise/usd-to-brl.ts';
import stripeUkContent from './gateways/stripe-uk.ts';
import stripeKeyedEntryContent from './gateways/stripe-keyed-entry.ts';
import paypalUsaContent from './gateways/paypal-usa.ts';
import paypalInvoiceContent from './gateways/paypal-invoice.ts';
import paypalQrCodeContent from './gateways/paypal-qr-code.ts';
import paypalMicropaymentsContent from './gateways/paypal-micropayments.ts';
import squareInPersonContent from './gateways/square-in-person.ts';
import squareOnlineStoreContent from './gateways/square-online-store.ts';
import authorizeNetStandardMerchantContent from './gateways/authorize-net-standard-merchant.ts';
import venmoStandardContent from './gateways/venmo-standard.ts';
import shopifyStandardContent from './gateways/shopify-standard.ts';
import gumroadStandardContent from './gateways/gumroad-standard.ts';
import lemonSqueezyStandardContent from './gateways/lemon-squeezy-standard.ts';
import gatewayComparatorContent from './tools/gateway-comparator.ts';
import profitMarginCalculatorContent from './tools/profit-margin-calculator.ts';
import breakEvenCalculatorContent from './tools/break-even-calculator.ts';
import roiCalculatorContent from './tools/roi-calculator.ts';
import quarterlyTaxCalculatorContent from './tools/quarterly-tax-calculator.ts';
import ukIr35CalculatorContent from './tools/uk-ir35-calculator.ts';

const CONTENT_REGISTRY: Record<string, Record<string, PageContent>> = {
  'sales-tax': {
    "alabama": alabamaSalesTaxContent,
    "alaska": alaskaSalesTaxContent,
    "arizona": arizonaSalesTaxContent,
    "arkansas": arkansasSalesTaxContent,
    "california": californiaSalesTaxContent,
    "colorado": coloradoSalesTaxContent,
    "connecticut": connecticutSalesTaxContent,
    "delaware": delawareSalesTaxContent,
    "district-of-columbia": districtOfColumbiaSalesTaxContent,
    "florida": floridaSalesTaxContent,
    "georgia": georgiaSalesTaxContent,
    "hawaii": hawaiiSalesTaxContent,
    "idaho": idahoSalesTaxContent,
    "illinois": illinoisSalesTaxContent,
    "indiana": indianaSalesTaxContent,
    "iowa": iowaSalesTaxContent,
    "kansas": kansasSalesTaxContent,
    "kentucky": kentuckySalesTaxContent,
    "louisiana": louisianaSalesTaxContent,
    "maine": maineSalesTaxContent,
    "maryland": marylandSalesTaxContent,
    "massachusetts": massachusettsSalesTaxContent,
    "michigan": michiganSalesTaxContent,
    "minnesota": minnesotaSalesTaxContent,
    "mississippi": mississippiSalesTaxContent,
    "missouri": missouriSalesTaxContent,
    "montana": montanaSalesTaxContent,
    "nebraska": nebraskaSalesTaxContent,
    "nevada": nevadaSalesTaxContent,
    "new-hampshire": newHampshireSalesTaxContent,
    "new-jersey": newJerseySalesTaxContent,
    "new-mexico": newMexicoSalesTaxContent,
    "new-york": newYorkSalesTaxContent,
    "north-carolina": northCarolinaSalesTaxContent,
    "north-dakota": northDakotaSalesTaxContent,
    "ohio": ohioSalesTaxContent,
    "oklahoma": oklahomaSalesTaxContent,
    "oregon": oregonSalesTaxContent,
    "pennsylvania": pennsylvaniaSalesTaxContent,
    "rhode-island": rhodeIslandSalesTaxContent,
    "south-carolina": southCarolinaSalesTaxContent,
    "south-dakota": southDakotaSalesTaxContent,
    "tennessee": tennesseeSalesTaxContent,
    "texas": texasSalesTaxContent,
    "utah": utahSalesTaxContent,
    "vermont": vermontSalesTaxContent,
    "virginia": virginiaSalesTaxContent,
    "washington": washingtonSalesTaxContent,
    "west-virginia": westVirginiaSalesTaxContent,
    "wisconsin": wisconsinSalesTaxContent,
    "wyoming": wyomingSalesTaxContent,
  },
  'freelance': {
    'software-engineer': softwareEngineerContent,
    'frontend-developer': frontendDeveloperContent,
    'backend-developer': backendDeveloperContent,
    'fullstack-developer': fullstackDeveloperContent,
    'ui-ux-designer': uiUxDesignerContent,
    copywriter: copywriterContent,
    'devops-engineer': devopsEngineerContent,
    'seo-specialist': seoSpecialistContent,
    'digital-marketer': digitalMarketerContent,
    'product-manager': productManagerContent,
    'technical-writer': technicalWriterContent,
    'data-scientist': dataScientistContent,
    'uk-contractor': ukContractorContent,
    'ai-engineer': aiEngineerContent,
    'product-designer': productDesignerContent,
    'mobile-app-developer': mobileAppDeveloperContent,
    'smart-contract-developer': smartContractDeveloperContent,
    'cloud-architect': cloudArchitectContent,
    'indie-hacker': indieHackerContent,
    'fractional-cto': fractionalCtoContent,
    'fractional-cmo': fractionalCmoContent,
    'shopify-developer': shopifyDeveloperContent,
    'ux-researcher': uxResearcherContent,
    'cybersecurity-analyst': cybersecurityAnalystContent,
    'financial-modeler': financialModelerContent,
    'video-editor': videoEditorContent,
    'motion-graphics-designer': motionGraphicsDesignerContent,
    'social-media-manager': socialMediaManagerContent,
    'growth-hacker': growthHackerContent,
    'content-strategist': contentStrategistContent,
    'brand-designer': brandDesignerContent,
    'voice-actor': voiceActorContent,
    illustrator: illustratorContent,
    'virtual-assistant': virtualAssistantContent,
    'pr-specialist': prSpecialistContent,
    'business-analyst': businessAnalystContent,
    'executive-coach': executiveCoachContent,
  },
  'gateways': {
    'stripe-usa': stripeUsaContent,
    'stripe-uk': stripeUkContent,
    'stripe-keyed-entry': stripeKeyedEntryContent,
    'paypal-usa': paypalUsaContent,
    'paypal-invoice': paypalInvoiceContent,
    'paypal-qr-code': paypalQrCodeContent,
    'paypal-micropayments': paypalMicropaymentsContent,
    'square-in-person': squareInPersonContent,
    'square-online-store': squareOnlineStoreContent,
    'authorize-net-standard-merchant': authorizeNetStandardMerchantContent,
    'venmo-standard': venmoStandardContent,
    'shopify-standard': shopifyStandardContent,
    'gumroad-standard': gumroadStandardContent,
    'lemon-squeezy-standard': lemonSqueezyStandardContent,
  },
  'vat': {
    'united-kingdom': unitedKingdomVatContent,
    germany: germanyVatContent,
    france: franceVatContent,
    spain: spainVatContent,
    italy: italyVatContent,
    ireland: irelandVatContent,
    australia: australiaVatContent,
    canada: canadaVatContent,
    netherlands: netherlandsVatContent,
    belgium: belgiumVatContent,
    poland: polandVatContent,
    sweden: swedenVatContent,
    austria: austriaVatContent,
    denmark: denmarkVatContent,
    finland: finlandVatContent,
    portugal: portugalVatContent,
    greece: greeceVatContent,
    'czech-republic': czechRepublicVatContent,
    romania: romaniaVatContent,
    hungary: hungaryVatContent,
    slovakia: slovakiaVatContent,
    bulgaria: bulgariaVatContent,
    croatia: croatiaVatContent,
    lithuania: lithuaniaVatContent,
    slovenia: sloveniaVatContent,
    latvia: latviaVatContent,
    estonia: estoniaVatContent,
    cyprus: cyprusVatContent,
    luxembourg: luxembourgVatContent,
    malta: maltaVatContent,
  },
  'ecommerce': {
    'amazon-fba-private-label': amazonFbaPrivateLabelContent,
    'amazon-fba-arbitrage': amazonFbaArbitrageContent,
    'amazon-fba-electronics': amazonFbaElectronicsContent,
    'amazon-fba-apparel': amazonFbaApparelContent,
    'amazon-fba-beauty': amazonFbaBeautyContent,
    'shopify-dropshipping': shopifyDropshippingContent,
    'shopify-apparel-brand': shopifyApparelBrandContent,
    'shopify-supplements': shopifySupplementsContent,
    'etsy-handmade-jewelry': etsyHandmadeJewelryContent,
    'etsy-digital-downloads': etsyDigitalDownloadsContent,
    'etsy-custom-apparel': etsyCustomApparelContent,
    'etsy-print-on-demand': etsyPrintOnDemandContent,
    'ebay-electronics': ebayElectronicsContent,
    'ebay-vintage-collectibles': ebayVintageCollectiblesContent,
    'ebay-refurbished-tech': ebayRefurbishedTechContent,
    'direct-to-consumer-skincare': directToConsumerSkincareContent,
    'tiktok-shop-dropshipping': tiktokShopDropshippingContent,
    'woocommerce-b2b': woocommerceB2bContent,
    'subscription-box-profit': subscriptionBoxProfitContent,
    'high-ticket-dropshipping': highTicketDropshippingContent,
    'amazon-fba-fee-calculator': amazonFbaFeeCalculatorContent,
  },
  'wise': {
    'usd-to-eur': usdToEurContent,
    'usd-to-gbp': usdToGbpContent,
    'gbp-to-eur': gbpToEurContent,
    'eur-to-usd': eurToUsdContent,
    'usd-to-inr': usdToInrContent,
    'cad-to-usd': cadToUsdContent,
    'aud-to-usd': audToUsdContent,
    'usd-to-brl': usdToBrlContent,
  },
  'tools': {
    'gateway-comparator': gatewayComparatorContent,
    'profit-margin-calculator': profitMarginCalculatorContent,
    'break-even-calculator': breakEvenCalculatorContent,
    'roi-calculator': roiCalculatorContent,
    'quarterly-tax-calculator': quarterlyTaxCalculatorContent,
    'uk-ir35-calculator': ukIr35CalculatorContent,
  },
};

export function getPageContent(family: string, slug: string): PageContent | null {
  // Normalize family aliases
  let fam = family;
  if (family === 'sales-tax-calculator') fam = 'sales-tax';
  if (family === 'freelance-rate-calculator') fam = 'freelance';
  if (
    family === 'stripe-fee-calculator' ||
    family === 'paypal-fee-calculator' ||
    family === 'square-fee-calculator' ||
    family === 'authorize-net-calculator' ||
    family === 'venmo-fee-calculator' ||
    family === 'shopify-fee-calculator' ||
    family === 'gumroad-fee-calculator' ||
    family === 'lemon-squeezy-calculator' ||
    family === 'merchant'
  ) {
    fam = 'gateways';
  }
  if (family === 'vat-calculator') fam = 'vat';
  if (family === 'ecommerce-profit-margin-calculator' || family === 'ecommerce-profit-calculator') fam = 'ecommerce';
  if (family === 'wise-vs-stripe') fam = 'wise';
  if (
    family === 'profit-margin-calculator' ||
    family === 'break-even-calculator' ||
    family === 'roi-calculator' ||
    family === 'quarterly-tax-calculator' ||
    family === 'uk-ir35-calculator' ||
    family === 'gateway-comparator'
  ) {
    fam = 'tools';
  }

  // Normalize slug aliases
  let s = slug.toLowerCase();
  if (fam === 'tools') {
    if (family === 'profit-margin-calculator') s = 'profit-margin-calculator';
    if (family === 'break-even-calculator') s = 'break-even-calculator';
    if (family === 'roi-calculator') s = 'roi-calculator';
    if (family === 'quarterly-tax-calculator') s = 'quarterly-tax-calculator';
    if (family === 'uk-ir35-calculator') s = 'uk-ir35-calculator';
    if (family === 'gateway-comparator') s = 'gateway-comparator';
  }
  if (fam === 'vat') {
    if (s === 'uk' || s === 'gb') s = 'united-kingdom';
  }
  if (fam === 'gateways') {
    if (family === 'shopify-fee-calculator') {
      if (s === 'standard' || s === 'shopify-standard') s = 'shopify-standard';
    } else if (family === 'gumroad-fee-calculator') {
      if (s === 'standard' || s === 'gumroad-standard') s = 'gumroad-standard';
    } else if (family === 'lemon-squeezy-calculator') {
      if (s === 'standard' || s === 'lemon-squeezy-standard') s = 'lemon-squeezy-standard';
    } else if (family === 'stripe-fee-calculator') {
      if (s === 'usa' || s === 'us') s = 'stripe-usa';
      if (s === 'uk' || s === 'united-kingdom') s = 'stripe-uk';
      if (s === 'keyed-entry' || s === 'manual-entry') s = 'stripe-keyed-entry';
    } else if (family === 'paypal-fee-calculator') {
      if (s === 'usa' || s === 'us' || s === 'standard') s = 'paypal-usa';
      if (s === 'invoice' || s === 'invoicing') s = 'paypal-invoice';
      if (s === 'qr-code' || s === 'qr') s = 'paypal-qr-code';
      if (s === 'micropayments' || s === 'micro') s = 'paypal-micropayments';
    } else if (family === 'square-fee-calculator') {
      if (s === 'in-person' || s === 'pos' || s === 'standard') s = 'square-in-person';
      if (s === 'online-store' || s === 'online' || s === 'usa') s = 'square-online-store';
    } else if (family === 'authorize-net-calculator') {
      if (s === 'standard-merchant' || s === 'standard' || s === 'all-in-one') s = 'authorize-net-standard-merchant';
    } else if (family === 'venmo-fee-calculator') {
      if (s === 'standard' || s === 'business') s = 'venmo-standard';
    }
  }

  const famRegistry = CONTENT_REGISTRY[fam];
  if (!famRegistry) return null;
  return famRegistry[s] || null;
}

export {
  californiaSalesTaxContent as californiaContent,
  softwareEngineerContent,
  stripeUsaContent,
  stripeUkContent,
  stripeKeyedEntryContent,
  paypalUsaContent,
  paypalInvoiceContent,
  paypalQrCodeContent,
  paypalMicropaymentsContent,
  squareInPersonContent,
  squareOnlineStoreContent,
  authorizeNetStandardMerchantContent,
  venmoStandardContent,
};
