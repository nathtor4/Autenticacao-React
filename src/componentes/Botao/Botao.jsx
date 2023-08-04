export default function Botao ({ onClick, type, texto, className }) {
  return (
    <div className={`flex justify-end py-1 ${className}`}>
        <button
          type={type}
          className="padrao-button"
          onClick={onClick}
        >
          {texto}
        </button>
    </div>
  );
};


