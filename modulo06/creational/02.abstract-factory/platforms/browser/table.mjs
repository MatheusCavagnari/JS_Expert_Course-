import TableComponent from "../../shared/base/tableComponent.mjs";

export default class TableBrowserComponent extends TableComponent {
  render(data) {
    const template = this.prepareData(data)
    document.body.insertAdjacentHTML("afterbegin", template)
  }

  prepareData(data) {
    const [firstItem] = data
    const tHeaders = Object.keys(firstItem).map(text => `<th scope=col>${text}</th>`)
    const joinList = list => list.join('')
    const tBoryValues = data
      .map(item => Object.values(item))
      .map(item => item.map(values => `<td>${values}</td>`))
      .map(tds => `<tr>${joinList(tds)}</tr>`)

    const template = `
    <table class="table">
      <thead>
        <tr>${joinList(tHeaders)}</tr>
      </thead>
      <tbody>
        ${joinList(tBoryValues)}
      </tbody>
    </table>`

    return template
  }
}