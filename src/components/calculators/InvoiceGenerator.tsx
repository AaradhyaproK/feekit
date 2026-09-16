'use client';

import React, { useState, useRef } from 'react';
import {
  FileText,
  Printer,
  Plus,
  Trash2,
  Download,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Building2,
  User,
  Calendar,
  DollarSign,
  Upload,
  Image as ImageIcon,
  CheckCircle2,
  Eye,
  HelpCircle,
} from 'lucide-react';

interface LineItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

const DEFAULT_ITEMS: LineItem[] = [
  { id: '1', description: 'Full-Stack Web Application & API Engineering', quantity: 40, rate: 95 },
  { id: '2', description: 'Financial Engine Optimization & Cloud Architecture', quantity: 15, rate: 110 },
  { id: '3', description: 'UI/UX Design System & Responsive Layout Polish', quantity: 10, rate: 85 },
];

export function InvoiceGenerator({ embedded = false }: { embedded?: boolean }) {
  // Logo & Branding
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Invoice Meta
  const [invoiceTitle, setInvoiceTitle] = useState('INVOICE');
  const [currency, setCurrency] = useState('$');
  const [invoiceNumber, setInvoiceNumber] = useState('INV-2026-001');
  const [poNumber, setPoNumber] = useState('PO-9482');
  const [issueDate, setIssueDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [dueDate, setDueDate] = useState(() => {
    const d = new Date();
    d.setDate(d.getDate() + 30);
    return d.toISOString().split('T')[0];
  });

  // Seller Details
  const [sellerName, setSellerName] = useState('Acme Software Labs LLC');
  const [sellerAddress, setSellerAddress] = useState('100 Innovation Way, Suite 400\nSan Francisco, CA 94107\nhello@acmesoftware.com');
  const [sellerTaxId, setSellerTaxId] = useState('EIN: 12-3456789 / VAT: US987654321');

  // Client Details
  const [clientName, setClientName] = useState('Global Enterprises Inc.');
  const [clientAddress, setClientAddress] = useState('500 Corporate Parkway\nNew York, NY 10001\nbilling@globalenterprises.com');

  // Line Items
  const [items, setItems] = useState<LineItem[]>(DEFAULT_ITEMS);

  // Taxes, Discounts & Custom Labels
  const [taxLabel, setTaxLabel] = useState('Sales Tax');
  const [taxRate, setTaxRate] = useState<number>(8.5);
  const [discountRate, setDiscountRate] = useState<number>(0);

  // Payment Details & Notes
  const [paymentInstructions, setPaymentInstructions] = useState(
    'Bank Wire / ACH Details:\nBank: Silicon Valley Bank (SVB)\nAccount: 9876543210\nRouting / ABA: 121000358\nSwift/BIC: SVBUS33'
  );
  const [notes, setNotes] = useState('Payment is due within 30 days of invoice date. Thank you for your business!');

  // Calculations
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
  const discountAmount = (subtotal * discountRate) / 100;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const taxAmount = (taxableAmount * taxRate) / 100;
  const grandTotal = taxableAmount + taxAmount;

  // Handlers
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setLogoUrl(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeLogo = () => {
    setLogoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const addItem = () => {
    setItems((prev) => [
      ...prev,
      { id: Date.now().toString(), description: 'New Service or Deliverable', quantity: 1, rate: 100 },
    ]);
  };

  const removeItem = (id: string) => {
    if (items.length <= 1) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItem = (id: string, field: keyof LineItem, val: string | number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        return { ...item, [field]: val };
      })
    );
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const resetToSample = () => {
    setItems(DEFAULT_ITEMS);
    setTaxRate(8.5);
    setDiscountRate(0);
    setTaxLabel('Sales Tax');
    setInvoiceNumber('INV-2026-001');
    setInvoiceTitle('INVOICE');
    setSellerName('Acme Software Labs LLC');
    setSellerAddress('100 Innovation Way, Suite 400\nSan Francisco, CA 94107\nhello@acmesoftware.com');
    setSellerTaxId('EIN: 12-3456789 / VAT: US987654321');
    setClientName('Global Enterprises Inc.');
    setClientAddress('500 Corporate Parkway\nNew York, NY 10001\nbilling@globalenterprises.com');
    setLogoUrl(null);
  };

  return (
    <div className="space-y-6">
      {/* Strict Print CSS Override: isolates ONLY #invoice-printable-sheet and eliminates ALL scrollbars */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 12mm 15mm;
          }
          html, body {
            background: #ffffff !important;
            color: #0f172a !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: visible !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          /* Completely kill all scrollbars in print mode */
          * {
            -ms-overflow-style: none !important;
            scrollbar-width: none !important;
          }
          *::-webkit-scrollbar {
            display: none !important;
            width: 0 !important;
            height: 0 !important;
          }
          /* Hide all page chrome, navigation, footers, sidebars, ad slots */
          header,
          footer,
          aside,
          nav,
          .print\\:hidden,
          [role="banner"],
          [role="navigation"],
          .AppShell-header,
          .command-rail {
            display: none !important;
            visibility: hidden !important;
          }
          body * {
            visibility: hidden;
          }
          #invoice-printable-sheet,
          #invoice-printable-sheet * {
            visibility: visible;
          }
          #invoice-printable-sheet {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
            background: #ffffff !important;
            overflow: visible !important;
          }
          #invoice-printable-sheet input,
          #invoice-printable-sheet textarea,
          #invoice-printable-sheet select {
            border: none !important;
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
            outline: none !important;
            resize: none !important;
            overflow: visible !important;
            color: #0f172a !important;
          }
        }
      `}</style>

      {/* Top Action Toolbar (Hidden during print) */}
      <div className="print:hidden rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Currency Select */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-700">Currency:</span>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none"
            >
              <option value="$">USD ($)</option>
              <option value="£">GBP (£)</option>
              <option value="€">EUR (€)</option>
              <option value="CA$">CAD ($)</option>
              <option value="A$">AUD ($)</option>
              <option value="₹">INR (₹)</option>
              <option value="CHF">CHF</option>
              <option value="¥">JPY (¥)</option>
            </select>
          </div>

          {/* Tax Type Label */}
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-slate-700">Tax Type:</span>
            <select
              value={taxLabel}
              onChange={(e) => setTaxLabel(e.target.value)}
              className="rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-800 shadow-2xs focus:border-blue-500 focus:outline-none"
            >
              <option value="Sales Tax">Sales Tax (US)</option>
              <option value="VAT">VAT (UK / EU)</option>
              <option value="GST">GST (Canada / AU / IN)</option>
              <option value="HST">HST (Canada)</option>
              <option value="QST">QST (Quebec)</option>
              <option value="Tax">Tax (General)</option>
            </select>
          </div>

          <button
            type="button"
            onClick={resetToSample}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Sample</span>
          </button>
        </div>

        {/* Big Print / Download PDF Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-white shadow-xs hover:bg-blue-700 transition-all active:scale-95"
          >
            <Printer className="h-4 w-4" />
            <span>Download PDF / Print Invoice</span>
          </button>
        </div>
      </div>

      {/* Main Clean Printable Invoice Sheet */}
      <div
        id="invoice-printable-sheet"
        className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 lg:p-12 shadow-sm text-slate-900 print:border-none print:shadow-none print:p-0 print:m-0"
      >
        {/* Top Header: Custom Logo + Business Details (Left) and Title + Meta (Right) */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 border-b border-slate-200 pb-8">
          {/* Left: Logo & Company Name */}
          <div className="space-y-4 max-w-md w-full sm:w-auto">
            {/* Logo Upload Box */}
            <div className="flex items-center gap-3">
              {logoUrl ? (
                <div className="relative group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logoUrl}
                    alt="Company Logo"
                    className="h-14 max-w-[200px] object-contain rounded-lg border border-slate-200 p-1 bg-white print:border-none print:p-0"
                  />
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="print:hidden absolute -top-2 -right-2 rounded-full bg-rose-500 text-white p-1 shadow-xs hover:bg-rose-600 transition-colors"
                    title="Remove Logo"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              ) : (
                <div className="print:hidden">
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleLogoUpload}
                    accept="image/png, image/jpeg, image/svg+xml, image/webp"
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="inline-flex items-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:border-blue-500 hover:bg-blue-50/50 hover:text-blue-600 transition-colors"
                  >
                    <Upload className="h-3.5 w-3.5" />
                    <span>Upload Your Logo</span>
                  </button>
                </div>
              )}
            </div>

            {/* Seller Info Inputs */}
            <div className="space-y-1">
              <input
                type="text"
                value={sellerName}
                onChange={(e) => setSellerName(e.target.value)}
                aria-label="Your Business Name"
                className="w-full text-lg sm:text-xl font-black text-slate-900 focus:bg-blue-50/50 rounded px-1.5 py-0.5 border border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none print:p-0"
                placeholder="Your Business / Legal Name"
              />

              {/* Screen mode: editable textarea */}
              <textarea
                value={sellerAddress}
                onChange={(e) => setSellerAddress(e.target.value)}
                aria-label="Your Address & Email"
                rows={3}
                className="print:hidden w-full text-xs text-slate-600 resize-none focus:bg-blue-50/50 rounded px-1.5 py-0.5 border border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none"
                placeholder="Street address, City, State, ZIP, Contact email"
              />
              {/* Print mode: pure text with zero scrollbars */}
              <div className="hidden print:block text-xs text-slate-600 whitespace-pre-wrap leading-tight">
                {sellerAddress}
              </div>

              <input
                type="text"
                value={sellerTaxId}
                onChange={(e) => setSellerTaxId(e.target.value)}
                aria-label="Tax ID / Registration Number"
                className="w-full text-[11px] font-mono text-slate-500 focus:bg-blue-50/50 rounded px-1.5 py-0.5 border border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none print:p-0"
                placeholder="Tax ID / EIN / VAT / GST Registration Number"
              />
            </div>
          </div>

          {/* Right: Customizable Title & Invoice Vitals */}
          <div className="w-full sm:w-72 space-y-3">
            <input
              type="text"
              value={invoiceTitle}
              onChange={(e) => setInvoiceTitle(e.target.value)}
              aria-label="Invoice Document Title"
              className="w-full text-right text-2xl sm:text-3xl font-black tracking-tight text-slate-900 uppercase focus:bg-blue-50/50 rounded px-1.5 py-0.5 border border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none print:p-0"
              placeholder="INVOICE"
            />

            <div className="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-100 print:bg-transparent print:p-0 print:border-none">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500">Invoice #:</span>
                <input
                  type="text"
                  value={invoiceNumber}
                  onChange={(e) => setInvoiceNumber(e.target.value)}
                  className="w-32 text-right font-mono font-bold text-slate-900 bg-white border border-slate-200 rounded px-2 py-1 text-xs focus:border-blue-500 focus:outline-none print:border-none print:p-0 print:bg-transparent"
                />
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500">PO / Ref #:</span>
                <input
                  type="text"
                  value={poNumber}
                  onChange={(e) => setPoNumber(e.target.value)}
                  className="w-32 text-right font-mono text-slate-700 bg-white border border-slate-200 rounded px-2 py-1 text-xs focus:border-blue-500 focus:outline-none print:border-none print:p-0 print:bg-transparent"
                />
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500">Issue Date:</span>
                <input
                  type="date"
                  value={issueDate}
                  onChange={(e) => setIssueDate(e.target.value)}
                  className="print:hidden w-32 text-right font-medium text-slate-800 bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:border-blue-500 focus:outline-none"
                />
                <span className="hidden print:inline font-mono text-xs font-semibold text-slate-900">
                  {issueDate}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-500">Due Date:</span>
                <input
                  type="date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="print:hidden w-32 text-right font-medium text-slate-800 bg-white border border-slate-200 rounded px-1.5 py-1 text-xs focus:border-blue-500 focus:outline-none"
                />
                <span className="hidden print:inline font-mono text-xs font-semibold text-slate-900">
                  {dueDate}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Billed To / Client Section */}
        <div className="py-6 border-b border-slate-200">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block mb-2">
            Billed To
          </span>
          <div className="max-w-md space-y-1">
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              aria-label="Client Company or Individual Name"
              className="w-full text-base font-bold text-slate-900 focus:bg-blue-50/50 rounded px-1.5 py-0.5 border border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none print:p-0"
              placeholder="Client Company or Individual Name"
            />

            {/* Screen mode */}
            <textarea
              value={clientAddress}
              onChange={(e) => setClientAddress(e.target.value)}
              aria-label="Client Address & Contact Email"
              rows={3}
              className="print:hidden w-full text-xs text-slate-600 resize-none focus:bg-blue-50/50 rounded px-1.5 py-0.5 border border-transparent hover:border-slate-300 focus:border-blue-500 focus:outline-none"
              placeholder="Client Address, City, State, ZIP, Billing email"
            />
            {/* Print mode */}
            <div className="hidden print:block text-xs text-slate-600 whitespace-pre-wrap leading-tight">
              {clientAddress}
            </div>
          </div>
        </div>

        {/* Line Items Table */}
        <div className="py-6 space-y-4">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                  <th className="pb-3 w-7/12">Item Description</th>
                  <th className="pb-3 text-center w-2/12">Qty / Hours</th>
                  <th className="pb-3 text-right w-2/12">Unit Price</th>
                  <th className="pb-3 text-right w-2/12">Total</th>
                  <th className="pb-3 w-8 print:hidden"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.map((item) => (
                  <tr key={item.id} className="group">
                    <td className="py-3 pr-2">
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                        className="w-full font-medium text-slate-800 bg-transparent rounded px-1.5 py-1 hover:bg-slate-50 focus:bg-blue-50/50 focus:outline-none print:p-0"
                        placeholder="Service or product description"
                      />
                    </td>
                    <td className="py-3 px-2 text-center">
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                        className="w-16 text-center font-mono font-medium text-slate-800 bg-transparent rounded px-1 py-1 hover:bg-slate-50 focus:bg-blue-50/50 focus:outline-none print:p-0"
                      />
                    </td>
                    <td className="py-3 px-2 text-right">
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.rate}
                        onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                        className="w-24 text-right font-mono font-medium text-slate-800 bg-transparent rounded px-1.5 py-1 hover:bg-slate-50 focus:bg-blue-50/50 focus:outline-none print:p-0"
                      />
                    </td>
                    <td className="py-3 pl-2 text-right font-mono font-bold text-slate-900">
                      {currency}
                      {(item.quantity * item.rate).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="py-3 pl-2 text-right print:hidden">
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        disabled={items.length <= 1}
                        className="text-slate-400 hover:text-rose-600 disabled:opacity-20 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="print:hidden">
            <button
              type="button"
              onClick={addItem}
              className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-blue-300 bg-blue-50/50 px-3.5 py-2 text-xs font-bold text-blue-700 hover:bg-blue-100/50 transition-colors"
            >
              <Plus className="h-3.5 w-3.5" />
              <span>Add Line Item</span>
            </button>
          </div>
        </div>

        {/* Totals & Payment Instructions */}
        <div className="border-t-2 border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-start gap-8">
          {/* Left: Payment Instructions & Notes */}
          <div className="w-full sm:w-6/12 space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-700 block mb-1">
                Payment Instructions (Bank / Wire / ACH / UPI):
              </span>
              {/* Screen mode textarea */}
              <textarea
                value={paymentInstructions}
                onChange={(e) => setPaymentInstructions(e.target.value)}
                rows={4}
                className="print:hidden w-full text-xs font-mono text-slate-700 bg-slate-50/60 rounded-xl border border-slate-200 p-2.5 resize-none focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              {/* Print mode: 100% clean pre-wrap text with ZERO scrollbar */}
              <div className="hidden print:block text-xs font-mono text-slate-800 whitespace-pre-wrap leading-relaxed">
                {paymentInstructions}
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-700 block mb-1">
                Terms & Notes:
              </span>
              {/* Screen mode textarea */}
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={2}
                className="print:hidden w-full text-xs text-slate-600 rounded-xl border border-slate-200 p-2.5 resize-none focus:border-blue-500 focus:outline-none"
              />
              {/* Print mode: 100% clean pre-wrap text with ZERO scrollbar */}
              <div className="hidden print:block text-xs text-slate-600 whitespace-pre-wrap leading-relaxed">
                {notes}
              </div>
            </div>
          </div>

          {/* Right: Subtotal, Discounts, Tax & Grand Total */}
          <div className="w-full sm:w-5/12 space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100 print:bg-transparent print:p-0 print:border-none">
            <div className="flex justify-between text-xs text-slate-600">
              <span className="font-semibold">Subtotal:</span>
              <span className="font-mono font-medium text-slate-900">
                {currency}
                {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <span className="font-semibold">Discount:</span>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={discountRate}
                  onChange={(e) => setDiscountRate(parseFloat(e.target.value) || 0)}
                  className="print:hidden w-12 text-center text-xs font-mono font-semibold bg-white border border-slate-200 rounded px-1 py-0.5"
                />
                <span className="hidden print:inline font-mono font-medium text-slate-800">
                  {discountRate}%
                </span>
                <span className="print:hidden">%</span>
              </div>
              <span className="font-mono font-medium text-slate-900">
                -{currency}
                {discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-1">
                <span className="font-semibold">{taxLabel}:</span>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={taxRate}
                  onChange={(e) => setTaxRate(parseFloat(e.target.value) || 0)}
                  className="print:hidden w-12 text-center text-xs font-mono font-semibold bg-white border border-slate-200 rounded px-1 py-0.5"
                />
                <span className="hidden print:inline font-mono font-medium text-slate-800">
                  {taxRate}%
                </span>
                <span className="print:hidden">%</span>
              </div>
              <span className="font-mono font-medium text-slate-900">
                +{currency}
                {taxAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>

            <div className="border-t border-slate-200 pt-3 flex justify-between items-baseline">
              <span className="text-sm font-extrabold text-slate-900">Total Due:</span>
              <span className="text-xl sm:text-2xl font-black font-mono text-blue-700">
                {currency}
                {grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
          </div>
        </div>

        {/* Clean Footer Signoff */}
        <div className="mt-10 border-t border-slate-200 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 gap-2">
          <span>Thank you for your business!</span>
          <span>Generated securely via FeeKit • 100% Client-Side Private</span>
        </div>
      </div>
    </div>
  );
}
