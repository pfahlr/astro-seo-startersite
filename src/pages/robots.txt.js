import { ROBOTSTXTCONTENT } from '../consts';

export async function GET() {
  var content = new Response(ROBOTSTXTCONTENT);
  content.headers.set('Content-Type', 'text/plain');
  return content;
}
