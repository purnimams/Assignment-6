import React from "react";

const CountSection = () => {
  return (
    <div className="bg-linear-to-r from-blue-700 to-purple-600 text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8">

        {/* Box 1 */}
        <div>
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="mt-2 text-sm">Active Users</p>
        </div>

        {/* Box 2 */}
        <div className="border-x border-white/30">
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="mt-2 text-sm">Premium Tools</p>
        </div>

        {/* Box 3 */}
        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="mt-2 text-sm">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default CountSection;