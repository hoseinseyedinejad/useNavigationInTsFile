


export default function NavigateTo(dest: string) {
    switch (dest) {
        case 'Destination1':
            window.myNavigate('/dest1');
            break;
        case 'Destination2':
            window.myNavigate('/dest2');
            break;
        default:
            window.myNavigate('/not-found');
            break;
    }
}