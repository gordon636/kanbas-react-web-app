function FunctionParenthesisAndParameters() {
    const square = (a: number) => a * a;
    const plusOne = (a: number) => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return (
        <>
            <h2>Parentheses and parameters</h2>
            twoSquared = {twoSquared}<br />
            square(2) = {square(2)}<br />
            threePlusOne(4, 5) = {threePlusOne}<br />
            plusOne(3) = {plusOne(3)}<br />
        </>
    )
}
export default FunctionParenthesisAndParameters;
