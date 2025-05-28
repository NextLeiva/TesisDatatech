import { Page, Locator } from "@playwright/test";

/**
 * Clase que representa la página de "Área" en la aplicación.
 * Contiene métodos para interactuar con los elementos de la interfaz.
 */
export class AreaPage {
  // Elementos de la interfaz de usuario (UI) localizados por selectores
  private readonly areaLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly nombreAreaTextbox: Locator;
  private readonly descripcionAreaTextbox: Locator;
  private readonly localCombo: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;
  private readonly buscadorSubAreaTextbox: Locator;

  /**
   * Constructor que inicializa todos los localizadores al recibir una instancia de Page.
   * @param page - Página de Playwright.
   */
  constructor(page: Page) {
    this.areaLink = page.locator("a").filter({ hasText: /^Area$/ }); // Enlace al módulo "Área"
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" }); // Botón para crear nueva área
    this.nombreAreaTextbox = page.locator("#txtNombreArea"); // Campo de texto para el nombre del área
    this.descripcionAreaTextbox = page.locator("#txtDescripcion"); // Campo de texto para la descripción del área
    this.localCombo = page.locator("#cboLocal"); // ComboBox para seleccionar el local
    this.estadoCombo = page.locator("#cboEstado"); // ComboBox para seleccionar el estado
    this.guardarButton = page.getByText("Guardar"); // Botón para guardar el área
    this.editarButton = page.locator('(//button[@id="btnEditar"])[4]'); // Botón para editar un área
    this.eliminarButton = page.locator("#btnEliminar"); // Botón para eliminar un área
    this.buscadorSubAreaTextbox = page.locator('input[placeholder="Buscar"]'); // Campo de búsqueda de sub-área
  }

  // MÉTODOS DE ACCIÓN

  /** Hace clic en el enlace del módulo Área */
  async clickArea() {
    await this.areaLink.click();
  }

  /** Hace clic en el botón "Nuevo" para crear una nueva área */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /** Hace clic en el botón "Guardar" para guardar los datos ingresados */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /** Hace clic en el botón "Editar" para modificar un registro existente */
  async clickEditar() {
    await this.editarButton.click();
  }

  /** Hace clic en el botón "Eliminar" para borrar un registro */
  async clickEliminar() {
    await this.eliminarButton.click();
  }

  /**
   * Llena el campo "Nombre del Área" con el valor proporcionado
   * @param nombreArea - Nombre del área a ingresar
   */
  async fillNombreArea(nombreArea: string) {
    await this.nombreAreaTextbox.click();
    await this.nombreAreaTextbox.fill(nombreArea);
  }

  /**
   * Llena el campo "Descripción del Área" con el valor proporcionado
   * @param descripcionArea - Descripción del área
   */
  async fillDescripcionArea(descripcionArea: string) {
    await this.descripcionAreaTextbox.click();
    await this.descripcionAreaTextbox.fill(descripcionArea);
  }

  /**
   * Selecciona un valor del combo de locales
   * @param local - Nombre del local a seleccionar
   */
  async selectLocal(local: string) {
    await this.localCombo.selectOption({ label: local });
  }

  /**
   * Llena el buscador de sub-áreas y ejecuta la búsqueda
   * @param buscadorSubArea - Término a buscar
   */
  async fillBuscadorSubArea(buscadorSubArea: string) {
    await this.buscadorSubAreaTextbox.fill(buscadorSubArea);
    await this.buscadorSubAreaTextbox.press("Enter");
  }

  /**
   * Selecciona un estado del combo correspondiente
   * @param estado - Estado a seleccionar (ej. "Activo", "Inactivo")
   */
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }
}


