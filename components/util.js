const linkResolver = (doc) => {
  if (doc.type === 'blog') return `/post/${doc.uid}`
  if (doc.type === 'page') return `/${doc.uid}`
  return `/doc/${doc.id}`
}