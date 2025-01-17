import { render } from 'vike/abort';

export default function data() {
    throw render(418, 'Teapots');
}
