// components/TurmericSections.js
import { Sun, Settings, Layers, Package, Sliders, Filter, Archive, CheckCircle } from "lucide-react";

const processSteps = [
  { icon: Sun,        label: "Sun Drying" },
  { icon: Settings,   label: "Manual Pre Cleaning" },
  { icon: Layers,     label: "Polishing" },
  { icon: Filter,     label: "Sorting" },
  { icon: Archive,    label: "Packing" },
  { icon: Sliders,    label: "Sifting" },
  { icon: Layers,     label: "De-Stoning" },
  { icon: CheckCircle,label: "Grinding Pre Cleaned Turmeric" },
  { icon: Settings,   label: "Passing Through Magnets" },
  { icon: Archive,    label: "Metal Separation" }
];

const productList = [
  [
    "Erode Turmeric Ground & Finger (Above 2% Curcumin)",
    "Salem Turmeric Ground & Finger (Above 3% Curcumin)",
    "Hybrid Turmeric Ground (Above 3% Curcumin)",
    "Rajapuri Turmeric Ground & Whole (Above 3% Curcumin)",
    "Alleppey Turmeric Finger (Above 5% Curcumin)",
    "Nizamabad Finger (Dubai Quality) (Above 2% Curcumin)",
    "Cuddapah Turmeric Finger (Japan Quality) (Above 2% Curcumin)",
    "Duggirala Finger (Dubai Quality) (Above 1.5% Curcumin)"
  ],
  [
    "Lemon Yellow Turmeric Ground (Above 2% Curcumin)",
    "Mother Turmeric (Erode) (For Extraction) (Above 3% Curcumin)",
    "Mother Turmeric (Salem) (For Extraction) (Above 6% Curcumin)",
    "Mother Turmeric (Sangli Kocha) (Above 9% Curcumin)",
    "Turmeric Finger & FAQ Quality (Above 1.5% Curcumin)",
    "Vietnam/Indonesia Sliced Turmeric (Above 5% Curcumin)",
    "Myanmar Whole Turmeric (Above 6% Curcumin)",
    "Ethiopia Whole Turmeric (Above 4% Curcumin)"
  ]
];

// export default function TurmericSections() {
// const TurmericSections = () => {
export default function TurmericSections() {
  return (
    <div className="max-w-6xl mx-auto py-16">
      {/* Turmeric Process Section */}
      <div>
        <h2 className="text-2xl font-bold tracking-wide mb-2">
          TURMERIC PROCESS
        </h2>
        <div className="h-1 w-24 bg-red-700 mb-6 relative">
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {processSteps.map((step, i) => (
            <div className="flex flex-col items-center" key={i}>
              <step.icon className="w-10 h-10 mb-2 text-gray-500" />
              <span className="text-sm text-gray-900 text-center">{step.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Turmeric Product Range */}
      <div>
        <h2 className="text-2xl font-bold tracking-wide mb-2">
          TURMERIC PRODUCT RANGE
        </h2>
        <div className="h-1 w-44 bg-red-700 mb-6 relative">
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productList.map((col, idx) => (
            <ul className="list-disc list-inside space-y-2 text-gray-800" key={idx}>
              {col.map((prod, pIdx) => (
                <li key={pIdx}>{prod}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

