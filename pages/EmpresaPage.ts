import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de "Empresa".
 * Implementa el patrón Page Object Model (POM) para automatizar pruebas
 * del módulo Empresa dentro de la aplicación.
 */
export class EmpresaPage {
  private readonly empresaLink: Locator;
  private readonly nuevoButton: Locator;
  private readonly razonSocialTextbox: Locator;
  private readonly nombreComercialTextbox: Locator;
  private readonly rucTextbox: Locator;
  private readonly departamentoCombo: Locator;
  private readonly provinciaCombo: Locator;
  private readonly distritoCombo: Locator;
  private readonly urbanizacionTextbox: Locator;
  private readonly calleTextbox: Locator;
  private readonly direccionTextbox: Locator;
  private readonly telefonoTextbox: Locator;
  private readonly codificacionCombo: Locator;
  private readonly configuracionesTab: Locator;
  private readonly numeroCodigoMarcacionTextbox: Locator;
  private readonly horaExtraTextbox: Locator;
  private readonly jornadaSemanalTextbox: Locator;
  private readonly jornadaDiaraTextbox: Locator;
  private readonly horaNocturnaTextbox: Locator;
  private readonly guardarButton: Locator;
  private readonly editarButton: Locator;
  private readonly eliminarButton: Locator;

  /**
   * Constructor de la clase.
   * @param page Página de Playwright sobre la que se automatiza.
   */
  constructor(page: Page) {
    this.empresaLink = page.locator("a").filter({ hasText: /^Empresa$/ });
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.razonSocialTextbox = page.locator("#txtRazonSocial");
    this.nombreComercialTextbox = page.locator("#txtNombreComercial");
    this.rucTextbox = page.locator("#txtRuc");
    this.departamentoCombo = page.locator("#cboDepartamento");
    this.provinciaCombo = page.locator("#cboProvincia");
    this.distritoCombo = page.locator("#cboDistrito");
    this.urbanizacionTextbox = page.locator("#txtUrbanizacion");
    this.calleTextbox = page.locator("#txtCalle");
    this.direccionTextbox = page.locator("#txtDireccion");
    this.telefonoTextbox = page.locator("#txtTelefono");
    this.codificacionCombo = page.locator("#cboCodificacion");
    this.configuracionesTab = page.getByText("Configuraciones");
    this.numeroCodigoMarcacionTextbox = page.locator("#txtNroCodMarcacion");
    this.horaExtraTextbox = page.locator("#txtHoraExtra");
    this.jornadaSemanalTextbox = page.locator("#txtJorSemanal");
    this.jornadaDiaraTextbox = page.locator("#txtJorDiaria");
    this.horaNocturnaTextbox = page.locator("#txtHoraNocturna");
    this.guardarButton = page.locator("#btnGuardar");
    this.editarButton = page.locator('(//button[@id="btnEditar"])[2]');
    this.eliminarButton = page.locator("#btnEliminar");
  }

  /** Hace clic en el enlace del módulo Empresa. */
  async clickEmpresa() {
    await this.empresaLink.click();
  }

  /** Hace clic en el botón "Nuevo" para registrar una nueva empresa. */
  async clickNuevo() {
    await this.nuevoButton.click();
  }

  /** Llena el campo "Razón Social". */
  async fillRazonSocial(razonSocial: string) {
    await this.razonSocialTextbox.click();
    await this.razonSocialTextbox.fill(razonSocial);
  }

  /** Llena el campo "Nombre Comercial". */
  async fillNombreComercial(nombreComercial: string) {
    await this.nombreComercialTextbox.click();
    await this.nombreComercialTextbox.fill(nombreComercial);
  }

  /** Llena el campo "RUC". */
  async fillRuc(ruc: string) {
    await this.rucTextbox.click();
    await this.rucTextbox.fill(ruc);
  }

  /** Selecciona el departamento. */
  async selectDepartamento(departamento: string) {
    await this.departamentoCombo.click();
    await this.departamentoCombo.selectOption({ label: departamento });
  }

  /** Selecciona la provincia. */
  async selectProvincia(provincia: string) {
    await this.provinciaCombo.click();
    await this.provinciaCombo.selectOption({ label: provincia });
  }

  /** Selecciona el distrito. */
  async selectDistrito(distrito: string) {
    await this.distritoCombo.click();
    await this.distritoCombo.selectOption({ label: distrito });
  }

  /** Llena el campo "Urbanización". */
  async fillUrbanizacion(urbanizacion: string) {
    await this.urbanizacionTextbox.click();
    await this.urbanizacionTextbox.fill(urbanizacion);
  }

  /** Llena el campo "Calle". */
  async fillCalle(calle: string) {
    await this.calleTextbox.click();
    await this.calleTextbox.fill(calle);
  }

  /** Llena el campo "Dirección". */
  async fillDireccion(direccion: string) {
    await this.direccionTextbox.click();
    await this.direccionTextbox.fill(direccion);
  }

  /** Llena el campo "Teléfono". */
  async fillTelefono(telefono: string) {
    await this.telefonoTextbox.click();
    await this.telefonoTextbox.fill(telefono);
  }

  /** Selecciona una opción del combo "Codificación". */
  async selectCodificacion(codificacion: string) {
    await this.codificacionCombo.click();
    await this.codificacionCombo.selectOption(codificacion);
  }

  /** Hace clic en la pestaña "Configuraciones". */
  async clickConfiguraciones() {
    await this.configuracionesTab.click();
  }

  /** Llena el campo "Nro Código de Marcación". */
  async fillNumeroCodigoMarcacion(numeroCodigoMarcacion: string) {
    await this.numeroCodigoMarcacionTextbox.click();
    await this.numeroCodigoMarcacionTextbox.fill(numeroCodigoMarcacion);
  }

  /** Llena el campo "Hora Extra". */
  async fillHoraExtra(horaExtra: string) {
    await this.horaExtraTextbox.click();
    await this.horaExtraTextbox.fill(horaExtra);
  }

  /** Llena el campo "Jornada Semanal". */
  async fillJornadaSemanal(jornadaSemanal: string) {
    await this.jornadaSemanalTextbox.click();
    await this.jornadaSemanalTextbox.fill(jornadaSemanal);
  }

  /** Llena el campo "Jornada Diaria". */
  async fillJornadaDiara(jornadaDiara: string) {
    await this.jornadaDiaraTextbox.click();
    await this.jornadaDiaraTextbox.fill(jornadaDiara);
  }

  /** Llena el campo "Hora Nocturna". */
  async fillHoraNocturna(horaNocturna: string) {
    await this.horaNocturnaTextbox.click();
    await this.horaNocturnaTextbox.fill(horaNocturna);
  }

  /** Hace clic en el botón "Guardar". */
  async clickGuardar() {
    await this.guardarButton.click();
  }

  /** Hace clic en el botón "Editar". */
  async clickEditar() {
    await this.editarButton.click();
  }

  /** Hace clic en el botón "Eliminar". */
  async clickEliminar() {
    await this.eliminarButton.click();
  }
}
