'use client';

import Link from "next/link";
import Navbar from "../Navbar";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';

export default function Header() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 soniyadan so‘ng loading bar o‘chadi
  };

  return (
    <header className="bg-gray-600 text-white">
      {loading && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}

      <div className="container mx-auto flex items-center w-[1200px] justify-between py-4">
        <Link href='/' className="text-2xl font-bold tracking-wider">Logo</Link>
        <Navbar />
        <Button onClick={handleClick} variant="contained" color="secondary">
          Yuklash
        </Button>
      </div>
    </header>
  );
}
