export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-200 to-gray-800 flex items-center justify-center px-4 pt-14">
      <section className="max-w-2xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-red-500">
          Policy
        </h1>

        {/* General Policy */}
        <div className="space-y-3">
          <h2 className="inline-block px-4 py-1 bg-red-400 text-white rounded-full text-sm font-semibold">
            General
          </h2>
          <p className="text-gray-700">
            • If you decide to get tattooed, you may bring <strong>one (1)</strong> person with you.
          </p>
        </div>

        {/* Canceling */}
        <div className="space-y-3">
          <h2 className="inline-block px-4 py-1 bg-red-400 text-white rounded-full text-sm font-semibold">
            Canceling
          </h2>

          <p className="text-gray-700">
            • If you decide to cancel, please let me know at least{" "}
            <strong>24 hours in advance</strong>.
          </p>

          <p className="text-gray-700">
            • After that, you may only reschedule{" "}
            <strong>two (2)</strong> more times.
          </p>

          <p className="text-gray-700">
            • If you cancel on the <strong>third reschedule</strong>, your tattoo
            appointment will be cancelled permanently.
          </p>

          <p className="text-gray-700">
            • Deposits are <strong>non-refundable</strong> if you cancel.
            Please respect my time as I respect yours —{" "}
            <strong>you are paying for my time</strong>.
          </p>
        </div>

        {/* No Show */}
        <div className="space-y-3">
          <h2 className="inline-block px-4 py-1 bg-red-400 text-white rounded-full text-sm font-semibold">
            No Show / Late
          </h2>

          <p className="text-gray-700">
            • If you do not show up within{" "}
            <strong>15 minutes</strong> after your scheduled time,
            your tattoo appointment will need to be rescheduled.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-700">
            
            <span>Thank you for your understanding</span>
            <span aria-hidden>🙏</span>
        </div>
      </section>
    </main>
  );
}
