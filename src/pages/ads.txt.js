import { ADSTXTLINE } from '../consts';

export async function GET() {
  var content = new Response(ADSTXTLINE);
  content.headers.set('Content-Type', 'text/plain');
  return content;
}
