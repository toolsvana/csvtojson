import type { Metadata } from 'next';
import CsvToJsonTool from './components/CsvToJsonTool';

export const metadata: Metadata = {
  title: 'CSV to JSON Converter — Convert CSV to JSON Online',
  description: 'Convert CSV data to JSON format instantly. Parse CSV files and transform them into structured JSON objects with proper formatting.',
  keywords: 'csv to json, csv converter, json converter, csv parser, convert csv',
};

const featurePillars = [
  { title: 'Instant conversion', description: 'Convert CSV to JSON in seconds with automatic parsing and formatting.' },
  { title: 'Smart parsing', description: 'Handles quoted values, commas, and special characters correctly.' },
  { title: 'Privacy-first', description: 'All conversion happens in your browser. Your data never leaves your device.' },
];

const seoContent = [
  {
    title: 'Why convert CSV to JSON',
    body: [
      'CSV (Comma-Separated Values) and JSON (JavaScript Object Notation) are two popular data formats. CSV is simple and widely supported by spreadsheet applications. JSON is structured and preferred for web applications and APIs. Converting between these formats is a common task in data processing.',
      'Web developers frequently need CSV data in JSON format. APIs consume and produce JSON, not CSV. When importing spreadsheet data into web applications, conversion is necessary. Manual conversion is tedious and error-prone for large datasets.',
      'Data analysis workflows often start with CSV exports. Databases, analytics tools, and reporting systems export to CSV. Processing this data in JavaScript requires JSON format. Automated conversion saves time and reduces errors.',
      'JSON provides better structure than CSV. CSV files are flat tables with rows and columns. JSON supports nested objects and arrays. This structure makes JSON more suitable for complex data relationships.',
      'API integration requires JSON format. Most modern APIs accept and return JSON. When uploading CSV data to APIs, conversion is mandatory. A reliable converter ensures data integrity during transformation.',
    ],
  },
  {
    title: 'Understanding CSV and JSON formats',
    body: [
      'CSV files store tabular data in plain text. Each line represents a row, and commas separate values. The first row typically contains column headers. CSV is human-readable and compatible with Excel, Google Sheets, and databases.',
      'JSON represents data as key-value pairs. Objects use curly braces, arrays use square brackets. JSON supports strings, numbers, booleans, null, and nested structures. This flexibility makes JSON ideal for complex data.',
      'CSV to JSON conversion maps columns to object keys. The first CSV row becomes JSON object keys. Subsequent rows become array elements. Each row transforms into an object with key-value pairs matching the headers.',
      'Special characters require careful handling. CSV values containing commas must be quoted. JSON strings need escaped quotes and backslashes. Proper parsing ensures data accuracy during conversion.',
      'Data types differ between formats. CSV treats everything as text. JSON distinguishes strings, numbers, and booleans. Converters must interpret data types correctly for accurate JSON output.',
    ],
  },
  {
    title: 'Common CSV to JSON use cases',
    body: [
      'Database migration projects use CSV to JSON conversion. Legacy systems export to CSV. Modern applications expect JSON. Using a [CSV to JSON] converter bridges this gap efficiently.',
      'Web application development requires JSON data. Frontend frameworks like React and Vue consume JSON. When prototyping with spreadsheet data, conversion enables rapid development without backend setup.',
      'API testing needs properly formatted data. Test suites require JSON payloads. Converting CSV test data to JSON streamlines test creation. This approach maintains test data in readable spreadsheet format.',
      'Data visualization libraries expect JSON. Charts and graphs in D3.js, Chart.js, and similar tools use JSON. Converting CSV exports from analytics tools enables custom visualizations.',
      'Mobile app development uses JSON for data. Apps sync with servers using JSON APIs. Converting CSV configuration data to JSON simplifies app setup and deployment.',
    ],
  },
  {
    title: 'Best practices for CSV to JSON conversion',
    body: [
      'Validate CSV structure before conversion. Ensure consistent column counts across rows. Missing values can cause parsing errors. Clean data produces reliable JSON output.',
      'Use meaningful column headers. CSV headers become JSON object keys. Clear, descriptive headers improve JSON readability. Avoid spaces and special characters in headers.',
      'Handle empty values appropriately. Decide whether empty CSV cells should be empty strings or null in JSON. Consistency matters for downstream processing.',
      'Test with sample data first. Verify conversion accuracy with a small dataset. Check that special characters, quotes, and commas parse correctly before processing large files.',
      'Consider data types in output. Some converters attempt type inference. Numbers might convert to JSON numbers instead of strings. Verify this matches your requirements.',
    ],
  },
];

const faqs = [
  { question: 'What is the difference between CSV and JSON?', answer: 'CSV is a flat table format with rows and columns. JSON is a structured format supporting nested objects and arrays. JSON is more flexible for complex data.' },
  { question: 'Can I convert large CSV files?', answer: 'Browser-based converters handle files up to several MB. For very large files (100MB+), consider command-line tools or server-side processing.' },
  { question: 'How are empty cells handled?', answer: 'Empty CSV cells typically convert to empty strings in JSON. Some converters offer options to use null instead.' },
  { question: 'Does this work with Excel files?', answer: 'No. This tool converts CSV (text) files. Export Excel files to CSV first, then convert to JSON.' },
];

export default function Home() {
  return (
    <div className="bg-grid-slate min-h-screen">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex flex-col gap-1">
            <a className="text-2xl font-semibold tracking-tight text-white" href="/">CSV to JSON Converter</a>
            <p className="text-sm text-slate-400">Convert CSV to JSON</p>
          </div>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/">Home</a>
            <a className="transition hover:text-white" href="mailto:support@lightning.studio">Support</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <CsvToJsonTool />
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {featurePillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
              <h3 className="mb-2 text-lg font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 space-y-12">
          <h2 className="text-3xl font-semibold text-white">In-depth guide</h2>
          {seoContent.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xl font-semibold text-white">{section.title}</h3>
              <div className="space-y-4">
                {section.body.map((paragraph, idx) => {
                  const linkMatch = paragraph.match(/\[CSV to JSON\]/);
                  if (linkMatch) {
                    const parts = paragraph.split('[CSV to JSON]');
                    return (
                      <p key={idx} className="leading-relaxed text-slate-300">
                        {parts[0]}
                        <a href="https://toolsvana.com/tool/csv-to-json" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300">CSV to JSON</a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={idx} className="leading-relaxed text-slate-300">{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="mb-8 text-3xl font-semibold text-white">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6">
                <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="mt-16 border-t border-white/10 bg-slate-950/80 py-8 text-center text-sm text-slate-400">
        <p>All processing happens locally in your browser. Powered by Lightning Studio.</p>
      </footer>
    </div>
  );
}
