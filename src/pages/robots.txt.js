import { SITE_INFO } from '../consts';

export async function GET() {
  var content = new Response(SITE_INFO.robotstxtcontent);
  content.headers.set('Content-Type', 'text/plain');
  return content;
}
