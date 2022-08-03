// code is on risk working with javascript but can't able to find types in TypeScript
// that's why i use any

export function sortDateFn(contentA: any, contentB: any) {
  return (
    new Date(contentB.frontMatter.date ?? contentB.frontMatter.date).valueOf() -
    new Date(contentA.frontMatter.date ?? contentA.frontMatter.date).valueOf()
  );
}

export function sortByDate(contents: any) {
  return contents.sort(sortDateFn);
}

export function sortTitleFn(contentA: any, contentB: any) {
  return contentA.title.localeCompare(contentB.title);
}

export function sortByTitle(contents: any) {
  return contents.sort((a: any, b: any) =>
    a.title > b.title ? 1 : b.title > a.title ? -1 : 0
  );
}
