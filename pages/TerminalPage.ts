import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de "Terminal".
 * Implementa el patrón Page Object Model (POM) para automatizar acciones
 * de mantenimiento sobre las terminales de la aplicación.
 */
export class TerminalPage {
  private readonly terminalLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly nombreTerminalTextbox: Locator;
  private readonly descripcionTerminalTextbox: Locator;
  private readonly localCombo: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;
  private readonly marcaSelector: Locator;
  private readonly modeloSelector: Locator;
  private readonly serialTextbox: Locator;
  private readonly localSelector: Locator;
  private readonly maestroFlag: Locator;
  page: any;

  /**
   * Constructor de la clase TerminalPage.
   * @param page Página de Playwright donde se automatiza.
   */
  constructor(page: Page) {
    this.terminalLink = page.locator("a").filter({ hasText: /^Terminal$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.nombreTerminalTextbox = page.locator("#txtTerminal");
    this.descripcionTerminalTextbox = page.locator("#txtDescripcion");
    this.marcaSelector = page.locator("#cboMarca");
    this.modeloSelector = page.locator("#cboModelo");
    this.localCombo = page.locator("#cboLocal");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.locator("#btnGuardar");
    this.editarButton = page.locator('(//button[@id="btnEditar"])[3]');
    this.eliminarButton = page.locator("#btnEliminar");
    this.serialTextbox = page.locator("#txtSerial");
    this.localSelector = page.locator("#cboLocal");
    //this.maestroFlag = page.locator("#chkflagMaestro + .switchery");
  }

  /** Hace clic en el enlace del módulo Terminal */
  async clickTerminal() {
    await this.terminalLink.click();
  }

  /** Hace clic en el botón "Nuevo" */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /** Hace clic en el botón "Guardar" */
  async clickGuardar() {
    await this.guardarButton.click();
  }
  /**
   * Selecciona una marca del combo "Marca"
   * @param nombreMarca Nombre de la marca a seleccionar
   */
  async seleccionarMarca(nombreMarca: string) {
    await this.marcaSelector.waitFor({ state: "visible" });
    await this.marcaSelector.selectOption({ label: nombreMarca });
  }

  async fillSerial(serial: string) {
    await this.serialTextbox.click();
    await this.serialTextbox.fill(serial);
  }
  /**
   * Selecciona un local del combo "Local"
   * @param local Nombre del local a seleccionar
   */
  async seleccionarLocal(local: string) {
    await this.localSelector.waitFor({ state: "visible" });
    await this.localSelector.selectOption({ label: local });
  }
  /**
   * Selecciona un modelo del combo "Modelo"
   * @param nombreModelo Nombre del modelo a seleccionar
   */
  async seleccionarModelo(nombreModelo: string) {
    await this.modeloSelector.waitFor({ state: "visible" });
    await this.modeloSelector.selectOption({ label: nombreModelo });
  }

  /** Hace clic en el botón "Editar" */
  async clickEditar() {
    await this.editarButton.click();
  }

  /** Hace clic en el botón "Eliminar" */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Rellena el campo "Nombre de Terminal"
   * @param nombreTerminal Texto del nombre a ingresar
   */
  async fillNombreTerminal(nombreTerminal: string) {
    await this.nombreTerminalTextbox.click();
    await this.nombreTerminalTextbox.fill(nombreTerminal);
  }

  /**
   * Rellena el campo "Descripción de Terminal"
   * @param descripcionTerminal Texto descriptivo a ingresar
   */
  async fillDescripcionTerminal(descripcionTerminal: string) {
    await this.descripcionTerminalTextbox.click();
    await this.descripcionTerminalTextbox.fill(descripcionTerminal);
  }

  /**
   * Selecciona un local del combo "Local"
   * @param local Texto visible de la opción
   */
  async selectLocal(local: string) {
    await this.localCombo.selectOption({ label: local });
  }

  /**
   * Selecciona un estado en el combo "Estado"
   * @param estado Texto visible de la opción
   */
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }

  /**
   * Usa el campo "Nombre" como buscador de terminal
   * @param buscadorTerminal Texto a buscar
   */
  async fillBuscadorTerminal(buscadorTerminal: string) {
    await this.nombreTerminalTextbox.fill(buscadorTerminal);
    await this.nombreTerminalTextbox.press("Enter");
  }

  /**
   * Marca o desmarca el flag "Maestro"
   * @param checked Indica si se debe marcar (true) o desmarcar (false)
   */
  async desactivarFlagMaestroSiEstaActivo() {
    const flag = this.page.locator("#chkflagMaestro");
    if (await flag.isChecked()) {
      await this.page.locator("#chkflagMaestro + .switchery").click();
    }
  }
}