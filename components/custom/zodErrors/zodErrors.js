import "./zodError.css";

export function ZodErrors({ error }) {
  if (!error) {
    return null;
  }

  return (
    <div>
      {error.map((err, index) => {
        return (
          <p className="error" key={index}>
            {err}
          </p>
        );
      })}
    </div>
  );
}
