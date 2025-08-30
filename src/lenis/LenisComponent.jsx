// App.jsx
import SmoothScroll from "./SmoothScroll";

export default function LenisComponent() {
  return (
    <SmoothScroll>
      <div className="min-h-screen space-y-20 p-10">
        <section className="h-screen bg-red-300 flex items-center justify-center">
          <h1 className="text-5xl font-bold">Section 1</h1>
        </section>
        <section className="h-screen bg-blue-300 flex items-center justify-center">
          <h1 className="text-5xl font-bold">Section 2</h1>
        </section>
        <section className="h-screen bg-green-300 flex items-center justify-center">
          <h1 className="text-5xl font-bold">Section 3</h1>
        </section>
      </div>
    </SmoothScroll>
  );
}
