function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900" />
        <p className="mt-4 text-sm font-medium text-slate-600">
          Loading page...
        </p>
      </div>
    </div>
  );
}

export default PageLoader;