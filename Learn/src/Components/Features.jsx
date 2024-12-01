import React from "react";

const Features = () => (
  <section id="features" className="p-8 bg-white">
    <h3 className="text-3xl font-bold text-center mb-6">Features</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="p-4 border rounded shadow hover:shadow-lg transition">
        <h4 className="text-xl font-semibold mb-2">Feature 1</h4>
        <p>Interactive UI components with React.</p>
      </div>
      <div className="p-4 border rounded shadow hover:shadow-lg transition">
        <h4 className="text-xl font-semibold mb-2">Feature 2</h4>
        <p>Responsive design with Tailwind CSS.</p>
      </div>
      <div className="p-4 border rounded shadow hover:shadow-lg transition">
        <h4 className="text-xl font-semibold mb-2">Feature 3</h4>
        <p>Dynamic content with reusable components.</p>
      </div>
    </div>
  </section>
);

export default Features;
