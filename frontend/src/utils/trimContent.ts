/* 
    This function is used to trim the content of a blog post to a certain word limit.
    It takes in the content and the word limit and returns the trimmed content.
*/
export default function trimContent(content: string, wordLimit: number) {
  const words = content.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + ' ' + '...';
  } else {
    return content;
  }
}