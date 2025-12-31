'use client';
import { useState } from 'react';

export default function CsvToJsonTool() {
  const [csvInput, setCsvInput] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');
  const [error, setError] = useState('');
  const [prettify, setPrettify] = useState(true);

  const parseCSV = (csv: string): string[][] => {
    const lines = csv.trim().split('\n');
    return lines.map(line => {
      const values: string[] = [];
      let current = '';
      let inQuotes = false;
      
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(current.trim());
          current = '';
        } else {
          current += char;
        }
      }
      values.push(current.trim());
      return values;
    });
  };

  const convertToJson = () => {
    try {
      setError('');
      
      if (!csvInput.trim()) {
        setError('Please enter CSV data');
        return;
      }

      const rows = parseCSV(csvInput);
      
      if (rows.length === 0) {
        setError('No data found in CSV');
        return;
      }

      const headers = rows[0];
      const data = rows.slice(1).map(row => {
        const obj: Record<string, string> = {};
        headers.forEach((header, index) => {
          obj[header] = row[index] || '';
        });
        return obj;
      });

      const json = prettify ? JSON.stringify(data, null, 2) : JSON.stringify(data);
      setJsonOutput(json);
    } catch (err) {
      setError('Failed to convert CSV. Please check your input format.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonOutput);
  };

  const loadSample = () => {
    const sample = `name,email,age,city
John Doe,john@example.com,30,New York
Jane Smith,jane@example.com,25,Los Angeles
Bob Johnson,bob@example.com,35,Chicago`;
    setCsvInput(sample);
  };

  return (
    <section className="glass-panel p-6 sm:p-10">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>Browser based
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">CSV to JSON Converter</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">Convert CSV data to JSON format instantly. Parse CSV files and transform them into structured JSON objects.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-slate-300">
            <input type="checkbox" checked={prettify} onChange={(e) => setPrettify(e.target.checked)} className="rounded border-white/10 bg-slate-900/40 text-cyan-500 focus:ring-cyan-400/20"/>
            Prettify JSON
          </label>
          <button onClick={loadSample} className="rounded-lg border border-white/10 bg-slate-900/40 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-900/60">
            Load Sample
          </button>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">CSV Input</label>
            <textarea value={csvInput} onChange={(e) => setCsvInput(e.target.value)} placeholder="name,email,age&#10;John,john@example.com,30&#10;Jane,jane@example.com,25" className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 focus:border-cyan-400/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 min-h-[300px]"/>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">JSON Output</label>
            <div className="relative">
              <textarea value={jsonOutput} readOnly placeholder="JSON will appear here..." className="w-full rounded-xl border border-white/10 bg-slate-900/40 px-4 py-3 font-mono text-sm text-white placeholder-slate-500 min-h-[300px]"/>
              {jsonOutput && (
                <button onClick={copyToClipboard} className="absolute right-2 top-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-300 transition hover:bg-slate-900/80">
                  Copy
                </button>
              )}
            </div>
          </div>
        </div>

        {error && (
          <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        <button onClick={convertToJson} disabled={!csvInput} className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-8 py-3 font-semibold uppercase tracking-wide text-white transition hover:opacity-90 disabled:opacity-50">
          Convert to JSON
        </button>
      </div>
    </section>
  );
}
