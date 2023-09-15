import { useState } from "react";

type Params = {
  slug: string;
  partySize: string;
  day: string;
  time: string;
};

type AvailableTimes = {
    time: string,
    available: boolean
}
export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<AvailableTimes[] | null>(null);

  async function fetchAvailabilities({ slug, partySize, day, time }: Params) {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/restaurant/${slug}?day=${day}&time=${time}&partySize=${partySize}`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  }

  return { data, loading, error, fetchAvailabilities };
}
