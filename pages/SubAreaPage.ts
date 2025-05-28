import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de "Sub Área".
 * Utiliza el patrón Page Object Model (POM) para automatizar las acciones
 * de creación, edición y eliminación de sub áreas.
 */
export class SubAreaPage {
  private readonly subAreaLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly nombreSubAreaTextbox: Locator;
  private readonly descripcionSubAreaTextbox: Locator;
  private readonly areaCombo: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;


  /**
   * Constructor de la clase SubAreaPage.
   * @param page Instancia de Playwright que representa la página actual.
   */
  constructor(page: Page) {
    this.subAreaLink = page.locator("a").filter({ hasText: /^Sub Area$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.nombreSubAreaTextbox = page.locator("#txtNombreSubArea");
    this.descripcionSubAreaTextbox = page.locator("#txtDescripcion");
    this.areaCombo = page.locator("#cboArea");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.getByText("Guardar");
    this.editarButton = page.locator('(//button[@id="btnEditar"])[4]');
    this.eliminarButton = page.locator("#btnEliminar");
  }

  /** Hace clic en el enlace del módulo "Sub Área". */
  async clickSubArea() {
    await this.subAreaLink.click();
  }

  /** Hace clic en el botón "Nuevo" para iniciar el registro de una sub área. */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /** Hace clic en el botón "Guardar" para confirmar el registro o la edición. */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /** Hace clic en el botón "Editar" para modificar una sub área existente. */
  async clickEditar() {
    await this.editarButton.click();
  }

  /** Hace clic en el botón "Eliminar" para borrar una sub área. */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Rellena el campo "Nombre de Sub Área".
   * @param nombreSubArea Nombre de la sub área a registrar.
   */
  async fillNombreSubArea(nombreSubArea: string) {
    await this.nombreSubAreaTextbox.click();
    await this.nombreSubAreaTextbox.fill(nombreSubArea);
  }

  /**
   * Rellena el campo "Descripción de Sub Área".
   * @param descripcionSubArea Texto descriptivo de la sub área.
   */
  async fillDescripcionSubArea(descripcionSubArea: string) {
    await this.descripcionSubAreaTextbox.click();
    await this.descripcionSubAreaTextbox.fill(descripcionSubArea);
  }

  /**
   * Selecciona un valor en el combo "Área".
   * @param area Etiqueta visible del área a seleccionar.
   */
  async selectArea(area: string) {
    await this.areaCombo.selectOption({ label: area });
  }

  /**
   * Selecciona un valor en el combo "Estado".
   * @param estado Estado visible en la lista desplegable (ej. Activo/Inactivo).
   */
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }
}
