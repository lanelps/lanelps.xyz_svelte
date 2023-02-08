import {DocumentIcon} from '@sanity/icons'

const DOCUMENT_TYPES_IN_STRUCTURE = [`projects`, `aboutPage`, `contactPage`, `homePage`]

const documents = [
  {
    title: `Projects`,
    type: `projects`,
  },
]

const singletons = [
  {
    title: `Home`,
    type: `homePage`,
  },
  {
    title: `About`,
    type: `aboutPage`,
  },
  {
    title: `Contact`,
    type: `contactPage`,
  },
]

const generateDocumentStructure = (S, {title, type}) => {
  return S.listItem()
    .title(title)
    .icon(DocumentIcon)
    .schemaType(type)
    .child(S.documentTypeList(type).defaultOrdering([{field: 'title', direction: 'asc'}]))
}

const generateSingletonStructure = (S, {title, type}) => {
  return S.listItem()
    .title(title)
    .schemaType(type)
    .child(S.editor().title(title).schemaType(type).documentId(type))
}

export default (S) =>
  S.list()
    .title(`Content`)
    .items([
      ...singletons.map((singleton) => generateSingletonStructure(S, singleton)),
      S.divider(),
      ...documents.map((document) => generateDocumentStructure(S, document)),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !DOCUMENT_TYPES_IN_STRUCTURE.includes(listItem.getId())
      ),
    ])
