import NavigateTo from "../utilities/MyTsFile";


export default function Destination1() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'red' }}>This is the first destination</h1>
            <button onClick={() => NavigateTo("Destination2")}>Go to Destination 2</button>
        </div>
    )
}