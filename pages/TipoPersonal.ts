import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de "Tipo Personal".
 * Implementa el patrón Page Object Model (POM) para automatizar las acciones
 * de mantenimiento sobre los tipos de personal en la aplicación.
 */
export class TipoPersonalPage {
  private readonly tipoPersonalLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly nombreTipoPersonalTextbox: Locator;
  private readonly descripcionTipoPersonalTextbox: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;
  private readonly buscadorTipoPersonalTextbox: Locator;
  page: any;

  /**
   * Constructor de la clase TipoPersonalPage.
   * @param page Página de Playwright sobre la que se interactúa.
   */
  constructor(page: Page) {
    this.tipoPersonalLink = page
      .locator("a")
      .filter({ hasText: /^Tipo Personal$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.nombreTipoPersonalTextbox = page.locator("#txtNombreClasePersonal");
    this.descripcionTipoPersonalTextbox = page.locator("#txtDescripcion");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.getByText("Guardar");
    this.editarButton = page.locator('(//button[@id="btnEditar"])[4]');
    this.eliminarButton = page.locator("#btnEliminar");
    this.buscadorTipoPersonalTextbox = page.locator(
      'input[placeholder="Buscar"]'
    );
  }

  /** Hace clic en el enlace del módulo "Tipo Personal". */
  async clickTipoPersonal() {
    await this.tipoPersonalLink.click();
  }

  /** Hace clic en el botón "Nuevo" para crear un nuevo registro. */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /** Hace clic en el botón "Guardar" para registrar o actualizar datos. */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /** Hace clic en el botón "Editar" para modificar un registro existente. */
  async clickEditar() {
    await this.editarButton.click();
  }

  /** Hace clic en el botón "Eliminar" para eliminar un registro. */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Rellena el campo "Nombre de Tipo Personal".
   * @param nombreTipoPersonal Texto del nombre a ingresar.
   */
  async fillNombreTipoPersonal(nombreTipoPersonal: string) {
    await this.nombreTipoPersonalTextbox.click();
    await this.nombreTipoPersonalTextbox.fill(nombreTipoPersonal);
  }

  /**
   * Rellena el campo "Descripción" del tipo personal.
   * @param descripcionTipoPersonal Texto descriptivo a ingresar.
   */
  async fillDescripcionTipoPersonal(descripcionTipoPersonal: string) {
    await this.descripcionTipoPersonalTextbox.click();
    await this.descripcionTipoPersonalTextbox.fill(descripcionTipoPersonal);
  }

  /**
   * Utiliza el campo de búsqueda para localizar registros.
   * @param buscadorTipoPersonal Texto para buscar en la grilla.
   */
  async fillBuscadorTipoPersonal(buscadorTipoPersonal: string) {
    await this.buscadorTipoPersonalTextbox.fill(buscadorTipoPersonal);
    await this.buscadorTipoPersonalTextbox.press("Enter");
  }

  /**
   * Selecciona un estado del combo "Estado".
   * @param estado Opción visible a seleccionar (ej. Activo, Inactivo).
   */
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }
}
