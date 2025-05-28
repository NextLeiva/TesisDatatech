import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de "Centro de Costo".
 * Implementa el patrón Page Object Model (POM) para automatizar pruebas
 * del módulo "Centro Costo".
 */
export class CentroCostoPage {
  private readonly page: Page;
  private readonly centroCostoLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly nombreCentroCostoTextbox: Locator;
  private readonly descripcionCentroCostoTextbox: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;
  private readonly buscadorCentroCostoTextbox: Locator;

  /**
   * Constructor de la clase.
   * @param page Instancia de Playwright que representa la página web.
   */
  constructor(page: Page) {
    this.page = page;
    this.centroCostoLink = page
      .locator("a")
      .filter({ hasText: /^Centro Costo$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.nombreCentroCostoTextbox = page.locator("#txtNombreCentroCosto");
    this.descripcionCentroCostoTextbox = page.locator("#txtDescripcion");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.getByText("Guardar");
    this.editarButton = page.locator("#btnEditar");
    this.eliminarButton = page.locator('(//button[@id="btnEditar"])[2]');
    this.buscadorCentroCostoTextbox = page.locator(
      'input[placeholder="Buscar"]'
    );
  }

  /**
   * Hace clic en el enlace del módulo "Centro Costo".
   */
  async clickCentroCosto() {
    await this.centroCostoLink.click();
  }

  /**
   * Hace clic en el botón "Nuevo" para iniciar el registro.
   */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /**
   * Hace clic en el botón "Guardar" para registrar un nuevo centro de costo.
   */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /**
   * Hace clic en el botón "Editar" para modificar un centro de costo existente.
   */
  async clickEditar() {
    await this.editarButton.click();
  }

  /**
   * Hace clic en el botón "Eliminar" para eliminar un centro de costo.
   */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Rellena el campo "Nombre del Centro de Costo".
   * @param nombreCentroCosto Nombre a ingresar.
   */
  async fillNombreCentroCosto(nombreCentroCosto: string) {
    await this.nombreCentroCostoTextbox.click();
    await this.nombreCentroCostoTextbox.fill(nombreCentroCosto);
  }

  /**
   * Rellena el campo "Descripción del Centro de Costo".
   * @param descripcionCentroCosto Descripción a ingresar.
   */
  async fillDescripcionCentroCosto(descripcionCentroCosto: string) {
    await this.descripcionCentroCostoTextbox.click();
    await this.descripcionCentroCostoTextbox.fill(descripcionCentroCosto);
  }

  /**
   * Escribe en el buscador para filtrar registros.
   * @param buscadorCentroCosto Texto a buscar.
   */
  async fillBuscadorCentroCosto(buscadorCentroCosto: string) {
    await this.buscadorCentroCostoTextbox.fill(buscadorCentroCosto);
    await this.buscadorCentroCostoTextbox.press("Enter");
  }

  /**
   * Selecciona una opción del combo "Estado".
   * @param estado Nombre visible del estado a seleccionar.
   */
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }
}
