'use client';

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function SearchForm() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!searchText) return;
    router.push(`/events/${searchText}`);
  };

  return (
    <form className='w-full sm:w-[580px]' onSubmit={handleSubmit}>
      <input
        className='w-full h-16 rounded-lg bg-white/10 px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10' type="text"
        spellCheck={false}
        placeholder="Search events in any city..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </form>
  );
}
