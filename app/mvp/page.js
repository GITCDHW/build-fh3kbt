"use client";

import { useState } from 'react';

export default function MvpPage() {
  const [rawText, setRawText] = useState('');
  const [polishedThread, setPolishedThread] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setPolishedThread(''); // Clear previous results

    if (!rawText.trim()) {
      setError('Please enter some text to generate a thread.');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/mvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ raw_text: rawText }),
      });

      if (!response.ok) {
        // Attempt to parse error message from backend if available
        let errorMessage = `HTTP error! status: ${response.status}`;
        try {
          const errorData = await response.json();
          if (errorData.message) {
            errorMessage = errorData.message;
          } else if (errorData.error) {
            errorMessage = errorData.error;
          }
        } catch (jsonError) {
          // If response is not JSON or parsing fails, use default message
          console.error('Failed to parse error response:', jsonError);
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setPolishedThread(data.polished_thread);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
      console.error('API call failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Thread Polish AI
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="rawText" className="block text-sm font-medium text-gray-700 mb-1">
              Paste your raw, unorganized text here:
            </label>
            <textarea
              id="rawText"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 resize-y"
              rows="8"
              placeholder="E.g., My thoughts on AI: it's transformative. Benefits: efficiency, innovation. Risks: job displacement, ethics. We need regulation, education. Future is exciting."
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              disabled={isLoading}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || !rawText.trim()}
          >
            {isLoading ? 'Polishing...' : 'Generate Social Media Thread'}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-3 bg-red-100 border border-red-300 text-red-700 rounded-md">
            <p className="font-medium">Error:</p>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {polishedThread && (
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md shadow-inner">
            <h2 className="text-lg font-medium text-gray-800 mb-3">Your Polished Thread:</h2>
            <div className="whitespace-pre-wrap text-gray-900 leading-relaxed text-sm">
              {polishedThread}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
