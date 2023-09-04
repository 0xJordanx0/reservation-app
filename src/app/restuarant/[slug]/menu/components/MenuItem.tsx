export default function MenuItem() {
  return (
    <div className="flex flex-col border-[1px] rounded-md p-4 gap-4">
      <div>
        <div className="prose">
          <h4>Surf & Turf</h4>
        </div>
        <p>A well done steak with lobster, rice and vegetables.</p>
      </div>
      <span className="font-bold">$29.99</span>
    </div>
  );
}
