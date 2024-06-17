import NavigateTo from "../utilities/MyTsFile";

export default function Destination2() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'green', marginBottom:'2rem'}}>This is the second destination</h1>
            <button onClick={() => NavigateTo("Destination1")}>Go to Destination 1</button><br />
            <button onClick={() => NavigateTo("Some where else")}>Go to Some where else</button>
        </div>
    )
}