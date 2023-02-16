import classNames from "classnames";

//Just some styling
function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full shadow-2xl",
    className
  );
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
export default Panel;
