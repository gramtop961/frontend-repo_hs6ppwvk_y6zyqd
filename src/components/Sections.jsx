import React from 'react';
import { ThumbsUp, MessageCircle, MapPin, Image as ImageIcon, UploadCloud, CheckCircle2, Clock3, AlertTriangle } from 'lucide-react';

function StatusBadge({ status }) {
  const map = {
    pending: { label: 'Pending', color: 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300', dot: 'bg-red-600' },
    progress: { label: 'In Progress', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300', dot: 'bg-yellow-500' },
    resolved: { label: 'Resolved', color: 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300', dot: 'bg-green-600' },
  };
  const s = map[status];
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-semibold ${s.color}`}>
      <span className={`h-2 w-2 rounded-full ${s.dot}`} />
      {s.label}
    </span>
  );
}

function FeedCard({ user, avatar, image, description, location, status }) {
  return (
    <article className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden">
      <div className="flex items-center gap-3 p-4">
        <img src={avatar} alt="avatar" className="h-9 w-9 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{user}</h4>
            <StatusBadge status={status} />
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" /> {location}
          </p>
        </div>
      </div>
      <div className="aspect-video bg-gray-100 dark:bg-neutral-800 grid place-items-center">
        <ImageIcon className="h-10 w-10 text-gray-400" />
        {image ? <img src={image} alt="issue" className="h-full w-full object-cover" /> : null}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-700 dark:text-gray-200">{description}</p>
        <div className="mt-3 flex items-center gap-3 text-gray-600 dark:text-gray-300">
          <button className="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition"><ThumbsUp className="h-4 w-4" /> Like</button>
          <button className="inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition"><MessageCircle className="h-4 w-4" /> Comment</button>
        </div>
      </div>
    </article>
  );
}

function MapPreview() {
  return (
    <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-4">
      <div className="h-64 rounded-lg relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjE5NTMwMzh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/10 dark:bg-black/30" />
        {/* Pins */}
        <span className="absolute left-1/4 top-1/3 -translate-x-1/2 -translate-y-1/2">
          <Pin color="#EF4444" />
        </span>
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Pin color="#F59E0B" />
        </span>
        <span className="absolute left-3/4 top-2/3 -translate-x-1/2 -translate-y-1/2">
          <Pin color="#22C55E" />
        </span>
      </div>
      <div className="mt-3 flex items-center gap-3 text-sm">
        <Legend color="#EF4444" label="Pending" Icon={AlertTriangle} />
        <Legend color="#F59E0B" label="In Progress" Icon={Clock3} />
        <Legend color="#22C55E" label="Resolved" Icon={CheckCircle2} />
      </div>
    </div>
  );
}

function Pin({ color = '#1E88E5' }) {
  return (
    <div className="relative">
      <MapPin className="h-7 w-7 drop-shadow-md" style={{ color }} />
      <span className="absolute left-1/2 top-full -translate-x-1/2 h-1.5 w-1.5 rounded-full opacity-60" style={{ backgroundColor: color }} />
    </div>
  );
}

function Legend({ color, label, Icon }) {
  return (
    <div className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-gray-50 dark:bg-neutral-800 border border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-200">
      <Icon className="h-4 w-4" style={{ color }} />
      <span>{label}</span>
    </div>
  );
}

function DashboardPreview() {
  const stats = [
    { label: 'Resolved', value: 62, color: '#43A047' },
    { label: 'In Progress', value: 24, color: '#FDD835' },
    { label: 'Pending', value: 14, color: '#EF4444' },
  ];
  return (
    <div className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-4">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">Community Impact</h4>
      <div className="grid grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center">
            <div className="h-32 w-12 bg-gray-100 dark:bg-neutral-800 rounded-md overflow-hidden flex items-end">
              <div className="w-full rounded-t-md" style={{ height: `${s.value}%`, backgroundColor: s.color }} />
            </div>
            <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">{s.label}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{s.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CreatePostPreview() {
  return (
    <div id="create" className="rounded-xl border border-black/5 dark:border-white/10 bg-white dark:bg-neutral-900 p-4">
      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Create a Report</h4>
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs text-gray-600 dark:text-gray-300">Photo</span>
          <div className="mt-1 h-28 rounded-md border border-dashed border-black/10 dark:border-white/20 grid place-items-center text-gray-500 dark:text-gray-400">
            <UploadCloud className="h-5 w-5" />
            <span className="text-xs mt-1">Upload a photo</span>
          </div>
        </label>
        <div className="grid gap-3">
          <label className="block">
            <span className="text-xs text-gray-600 dark:text-gray-300">Location</span>
            <input className="mt-1 w-full rounded-md border border-black/10 dark:border-white/20 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-gray-900 dark:text-white" placeholder="Type address or place" />
          </label>
          <label className="block">
            <span className="text-xs text-gray-600 dark:text-gray-300">Description</span>
            <textarea rows={3} className="mt-1 w-full rounded-md border border-black/10 dark:border-white/20 bg-white dark:bg-neutral-900 px-3 py-2 text-sm text-gray-900 dark:text-white" placeholder="Describe the issue" />
          </label>
          <div className="flex justify-end">
            <button className="inline-flex items-center px-4 py-2 rounded-md text-sm font-semibold text-white" style={{ backgroundColor: '#1E88E5' }}>
              Submit Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Sections() {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6" id="feed">
      <div className="lg:col-span-2 grid gap-6">
        <FeedCard
          user="Sita Gurung"
          avatar="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
          description="Overflowing garbage bins near the market in Pokhara. Needs urgent pickup before the weekend rush."
          location="Pokhara - Chipledhunga"
          status="pending"
        />
        <FeedCard
          user="Anil Thapa"
          avatar="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop"
          description="Street cleaning underway after community request. Thank you Ward Office!"
          location="Lalitpur - Jawalakhel"
          status="progress"
        />
        <FeedCard
          user="Namrata KC"
          avatar="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=200&auto=format&fit=crop"
          description="Illegal dumping removed and area sanitized. Great work everyone!"
          location="Kathmandu - Baneshwor"
          status="resolved"
        />
      </div>
      <div className="grid gap-6">
        <MapPreview />
        <DashboardPreview />
        <CreatePostPreview />
      </div>
    </div>
  );
}
