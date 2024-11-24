import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

export default function LyricsFinder() {
  const [artist, setArtist] = useState('');
  const [song, setSong] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!artist || !song) return;

    setLoading(true);
    setError('');
    setLyrics('');

    try {
      const response = await fetch(
        `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}`
      );
      
      if (!response.ok) {
        throw new Error('Lyrics not found');
      }

      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      setError('Could not find lyrics for this song. Please check the artist and song name.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-white/10">
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="artist" className="block text-sm font-medium text-gray-300">
                Artist Name
              </label>
              <input
                type="text"
                id="artist"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter artist name"
                required
              />
            </div>
            <div>
              <label htmlFor="song" className="block text-sm font-medium text-gray-300">
                Song Title
              </label>
              <input
                type="text"
                id="song"
                value={song}
                onChange={(e) => setSong(e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-black/30 border border-white/10 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter song title"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                <span>Searching...</span>
              </>
            ) : (
              <>
                <Search className="h-5 w-5" />
                <span>Find Lyrics</span>
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {lyrics && (
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white mb-4">
              {song} - {artist}
            </h2>
            <div className="text-gray-300 whitespace-pre-line">{lyrics}</div>
          </div>
        )}
      </div>
    </div>
  );
}