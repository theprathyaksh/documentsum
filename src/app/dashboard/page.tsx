"use client"
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";
import * as pdfjsLib from 'pdfjs-dist';

     
const SUMMARIZE_URL = "http://localhost:3000/api/summarize";

const PageComponent: React.FC = () => {
  const [summary, setSummary] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);



  const summarizeText = (text: string) => {
    fetch(SUMMARIZE_URL, {
      method: "POST",
      body: JSON.stringify({
        text,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setSummary(data.message.content);
      });
};


  
  return (
    <main className={`flex relative min-h-screen flex-col items-center px-12 w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-y-auto`}>
      <input className="hidden" id="file-input" type="file" />

      <div className="grid sm:grid-cols-2 min-h-[400px] min-w-[1200px] bg-gray-800 border border-gray-700 rounded-lg">
        <div className="relative bg-gray-900  px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 min-h-[200px] min-w-[600px]">
          <div className="mx-auto max-w-md w-full overflow-y-auto">
            <div className="divide-y divide-gray-300/50 min-h-[400px]">
              <h2 className="text-center mb-4 text-2xl text-white m-4 ">Raw text</h2>
              <div className="space-y-6 py-8 text-base leading-7 text-white" id="pdfContent"></div>
            </div>
          </div>
        </div>
        <div className="relative bg-gray-900 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 min-w-[600px]">
          <div className="mx-auto max-w-md w-full h-48 overflow-y-auto">
          <div className="divide-y divide-gray-300/50">
              <h2 className="text-center mb-4 text-2xl text-white m-4">Summarized text</h2>
              {isLoading && (
                <p className="text-white text-center">Processing pdf...</p>
              )}
              {!isLoading && (
                <div className="text-white">{summary}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <Button className="bg-white"
        onClick={() => {
          const fileInput = document.getElementById("file-input");
          if (fileInput instanceof HTMLInputElement) {
            fileInput.click();
          } else {
            console.error("File input element not found.");
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-10 bg-white"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6 6 0 0 0-5.98 6.496A5.25 5.25 0 0 0 6.75 20.25H18a4.5 4.5 0 0 0 2.206-8.423 3.75 3.75 0 0 0-4.133-4.303A6.001 6.001 0 0 0 10.5 3.75Zm2.03 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v4.94a.75.75 0 0 0 1.5 0v-4.94l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
            clipRule="evenodd"
          />
        </svg>
        <span>Upload PDF</span>
      </Button>
    </main>
  );
}
export default PageComponent;
