import { Locator, Page } from "@playwright/test";

/**
 * Página de gestión de "Personal".
 * Implementa el patrón Page Object Model (POM) para automatizar la creación,
 * edición y eliminación de registros de personal.
 */

export class PersonalPage {
  private readonly personalLink: Locator;
  private readonly codigoMarcacionTextbox: Locator;
  private readonly nuevoButton: Locator;
  private readonly nombreTextbox: Locator;
  private readonly apellidoPaternoTextbox: Locator;
  private readonly apellidoMaternoTextbox: Locator;
  private readonly TipoDocumentoCombo: Locator;
  private readonly dniTextbox: Locator;
  private readonly departamentoCombo: Locator;
  private readonly provinciaCombo: Locator;
  private readonly distritoCombo: Locator;
  private readonly urbanizacionTextbox: Locator;
  private readonly calleTextbox: Locator;
  private readonly direccionTextbox: Locator;
  private readonly telefonoTextbox: Locator;
  private readonly correotextbox: Locator;
  private readonly fechaNacimientoTextbox: Locator;
  private readonly estadoCombo: Locator;
  private readonly guardarButton: Locator;

  private readonly localCombo: Locator;
  private readonly areaCombo: Locator;
  private readonly cargoCombo: Locator;
  private readonly subAreaCombo: Locator;
  private readonly clasePersonalCombo: Locator;
  private readonly centroCostoCombo: Locator;
  private readonly fechaIngresoDate: Locator;
  private readonly fechaCeseDate: Locator;
  private readonly fiscalizadoCombo: Locator;
  private readonly datosLaboralesTab: Locator;

  constructor(page: Page) {
    this.personalLink = page.locator("a").filter({ hasText: /^Personal$/ });
    this.codigoMarcacionTextbox = page.locator("#txtCodigoMarcacion");
    this.nuevoButton = page.getByRole("button", { name: "Nuevo" });
    this.nombreTextbox = page.locator("#txtNombre");
    this.apellidoPaternoTextbox = page.locator("#txtApPaterno");
    this.apellidoMaternoTextbox = page.locator("#txtApMaterno");
    this.TipoDocumentoCombo = page.locator("#cboTipoDocumento");
    this.dniTextbox = page.locator("#txtNumeroDocumento");
    this.departamentoCombo = page.locator("#cboDepartamento");
    this.provinciaCombo = page.locator("#cboProvincia");
    this.distritoCombo = page.locator("#cboDistrito");
    this.urbanizacionTextbox = page.locator("#txtUrbanizacion");
    this.calleTextbox = page.locator("#txtCalle");
    this.direccionTextbox = page.locator("#txtDireccion");
    this.fechaIngresoDate = page.locator("#txtFechaIngreso");
    this.fechaCeseDate = page.locator("#txtFechaCese");
    this.fiscalizadoCombo = page.locator("#cboFiscalizado");
    this.subAreaCombo = page.locator("#cboSubArea");
    this.clasePersonalCombo = page.locator("#cboClasePersonal");
    this.centroCostoCombo = page.locator("#cboCentroCosto");
    this.fechaNacimientoTextbox = page.locator("#dateNacimiento");
    this.telefonoTextbox = page.locator("#txtTelefono");
    this.correotextbox = page.locator("#txtCorreo");
    this.areaCombo = page.locator("#cboArea");
    this.cargoCombo = page.locator("#cboCargo");
    this.localCombo = page.locator("#cboLocal");
    this.estadoCombo = page.locator("#cboEstado");
    this.guardarButton = page.getByText("Guardar");
    this.datosLaboralesTab = page.getByRole("link", {
      name: "Datos Laborales",
    });

  }
  async clickDatosLaboralesTab() {
    await this.datosLaboralesTab.click();
  }

  async clickPersonal() {
    await this.personalLink.click();
  }
  async fillCodigoMarcacion(codigoMarcacion: string) {
    await this.codigoMarcacionTextbox.click();
    await this.codigoMarcacionTextbox.fill(codigoMarcacion);
  }
  async clickArea() {
    await this.areaCombo.click();
    await this.areaCombo.selectOption({ label: "Administración" });
  }

  async clickNuevo() {
    await this.nuevoButton.click();
  }

  async clickGuardar() {
    await this.guardarButton.click();
  }

  async fillNombre(nombre: string) {
    await this.nombreTextbox.click();
    await this.nombreTextbox.fill(nombre);
  }

  async fillApellidoPaterno(apellido: string) {
    await this.apellidoPaternoTextbox.click();
    await this.apellidoPaternoTextbox.fill(apellido);
  }
  async fillApellidoMaterno(apellido: string) {
    await this.apellidoPaternoTextbox.click();
    await this.apellidoMaternoTextbox.fill(apellido);
  }
  async selectTipoDocumento(tipoDocumento: string) {
    await this.TipoDocumentoCombo.selectOption({ label: tipoDocumento });
  }

  async fillNumeroDocumento(numeroDocumento: string) {
    await this.dniTextbox.click();
    await this.dniTextbox.fill(numeroDocumento);
  }

  async fillFechaNacimiento(fechaNacimiento: string) {
    await this.fechaNacimientoTextbox.click();
    await this.fechaNacimientoTextbox.fill(fechaNacimiento);
  }
  async selectDepartamento(departamento: string) {
    await this.departamentoCombo.selectOption({ label: departamento });
  }
  async selectProvincia(provincia: string) {
    await this.provinciaCombo.selectOption({ label: provincia });
  }
  async selectDistrito(distrito: string) {
    await this.distritoCombo.selectOption({ label: distrito });
  }
  async fillUrbanizacion(urbanizacion: string) {
    await this.urbanizacionTextbox.click();
    await this.urbanizacionTextbox.fill(urbanizacion);
  }
  async fillCalle(calle: string) {
    await this.calleTextbox.click();
    await this.calleTextbox.fill(calle);
  }
  async fillDireccion(direccion: string) {
    await this.direccionTextbox.click();
    await this.direccionTextbox.fill(direccion);
  }
  async fillEmail(email: string) {
    await this.correotextbox.click();
    await this.correotextbox.fill(email);
  }
  async fillTelefono(telefono: string) {
    await this.telefonoTextbox.click();
    await this.telefonoTextbox.fill(telefono);
  }
  async fillFechaIngreso(fechaIngreso: string) {
    await this.fechaIngresoDate.click();
    await this.fechaIngresoDate.fill(fechaIngreso);
  }
  async selecEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }
  async selectFiscalizado(fiscalizado: string) {
    await this.fiscalizadoCombo.selectOption({ label: fiscalizado });
  }
  async selectLocal(local: string) {
    await this.localCombo.selectOption({ label: local });
  }
  async selectArea(area: string) {
    await this.areaCombo.selectOption({ label: area });
  }
  async selectSubArea(subArea: string) {
    await this.subAreaCombo.selectOption({ label: subArea });
  }
  async selectCargo(cargo: string) {
    await this.cargoCombo.selectOption({ label: cargo });
  }
  async selectClasePersonal(clasePersonal: string) {
    await this.clasePersonalCombo.selectOption({ label: clasePersonal });
  }
  async selectCentroCosto(centroCosto: string) {
    await this.centroCostoCombo.selectOption({ label: centroCosto });
  }
  async fillFechaCese(fechaCese: string) {
    await this.fechaCeseDate.click();
    await this.fechaCeseDate.fill(fechaCese);
  }
  async selectEstado(estado: string) {
    await this.estadoCombo.selectOption({ label: estado });
  }
  async clickEliminar() {
    await this.guardarButton.click();
  }
  async clickEditar() {
    await this.guardarButton.click();
  }
}
