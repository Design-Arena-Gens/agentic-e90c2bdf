"use client";

import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");
  const [out, setOut] = useState("");

  const transform = () => {
    const t = text.trim();
    if (!t) { setOut("Hu"); return; }
    const vowels = /[aeiou]/gi;
    const hu = t.replace(vowels, "u");
    const spaced = hu.replace(/\s+/g, " ").replace(/\b[a-z]/g, m => m.toUpperCase());
    setOut(spaced);
  };

  return (
    <main className="container">
      <div className="card">
        <h1 className="title">Hu</h1>
        <p className="subtitle">Type anything, I will humbly turn it into Hu-powered prose.</p>
        <div className="row">
          <input className="input" placeholder="Say something..." value={text} onChange={e => setText(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') transform(); }} />
          <button className="button" onClick={transform}>Transform</button>
        </div>
        <div className="output">{out}</div>
        <div className="footer">Deployed on <a className="link" href="https://vercel.com" target="_blank" rel="noreferrer">Vercel</a>.</div>
      </div>
    </main>
  );
}
