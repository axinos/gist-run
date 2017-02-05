import 'monaco-editor';

export class App {
  public container: HTMLDivElement;

  attached() {
    monaco.editor.create(this.container, {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
      ].join('\n'),
      language: 'javascript'
    });
  }
}
