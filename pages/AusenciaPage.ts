import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de ausencias.
 * Implementa el patrón Page Object Model (POM) para automatizar la interacción
 * con el módulo "Ausencia" del sistema.
 */
export class AusenciaPage {
  private readonly page: Page;
  private readonly ausenciaLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly nombreAusenciaTextbox: Locator;
  private readonly descripcionAusenciaTextbox: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;

  /**
   * Constructor de la clase.
   * @param page Instancia de la página de Playwright.
   */
  constructor(page: Page) {
    this.page = page;
    this.ausenciaLink = page.locator("a").filter({ hasText: /^Ausencia$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.nombreAusenciaTextbox = page.locator("#txtNombreAusencia");
    this.descripcionAusenciaTextbox = page.locator("#txtDescripcion");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.getByText("Guardar");
    this.editarButton = page.locator("#btnEditar");
    this.eliminarButton = page.locator("#btnEliminar");
  }

  /**
   * Hace clic en el enlace del módulo "Ausencia".
   */
  async clickAusencia() {
    await this.ausenciaLink.click();
  }

  /**
   * Hace clic en el botón "Nuevo" para registrar una nueva ausencia.
   */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /**
   * Hace clic en el botón "Guardar" para confirmar el registro.
   */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /**
   * Hace clic en el botón "Editar" para modificar un registro existente.
   */
  async clickEditar() {
    await this.editarButton.click();
  }

  /**
   * Hace clic en el botón "Eliminar" para eliminar un registro.
   */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Rellena el campo "Nombre de Ausencia".
   * @param nombreAusencia Texto del nombre de la ausencia.
   */
  async fillNombreAusencia(nombreAusencia: string) {
    await this.nombreAusenciaTextbox.click();
    await this.nombreAusenciaTextbox.fill(nombreAusencia);
  }

  /**
   * Rellena el campo "Descripción de Ausencia".
   * @param descripcionAusencia Texto de la descripción.
   */
  async fillDescripcionAusencia(descripcionAusencia: string) {
    await this.descripcionAusenciaTextbox.click();
    await this.descripcionAusenciaTextbox.fill(descripcionAusencia);
  }

  /**
   * Selecciona una opción del combo "Estado".
   * @param estado Nombre visible de la opción a seleccionar.
   */
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }

  /**
   * Rellena el campo de búsqueda y presiona Enter.
   * @param buscadorAusencia Texto a buscar.
   */
  async fillBuscadorAusencia(buscadorAusencia: string) {
    const buscadorAusenciaTextbox = this.page.locator(
      'input[placeholder="Buscar"]'
    );
    await buscadorAusenciaTextbox.fill(buscadorAusencia);
    await buscadorAusenciaTextbox.press("Enter");
  }

  /**
   * Confirma la eliminación haciendo clic en el botón "Eliminar" del modal.
   */
  async clickEliminarConfirmar() {
    const eliminarConfirmarButton = this.page.locator(
      'button:has-text("Eliminar")'
    );
    await eliminarConfirmarButton.click();
  }
}
