import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden rounded-none sm:rounded-2xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900">
        <Spline
          scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent dark:from-neutral-950 dark:via-neutral-950/40" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full p-6 sm:p-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold text-gray-700 bg-white/80 border border-black/5 dark:text-gray-200 dark:bg-neutral-900/70 dark:border-white/10">
                Community • Cleanliness • Impact
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                Report civic issues. Rally your neighborhood. Keep Nepal <span style={{ color: '#43A047' }}>Safa</span>.
              </h1>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-base sm:text-lg">
                Post complaints with photos and location, track progress, and visualize impact with a live map and dashboard.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#create"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold text-white shadow"
                  style={{ backgroundColor: '#1E88E5' }}
                >
                  Create a Report
                </a>
                <a
                  href="#feed"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold border border-black/10 dark:border-white/20 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5"
                >
                  Explore Feed
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
