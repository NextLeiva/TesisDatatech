import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { EmpresaPage } from "../pages/EmpresaPage";

/**
 * Test: Crear una nueva Empresa
 * Descripción: Este test automatiza el proceso de creación de un nuevo registro en el módulo "Empresa".
 * Inicia con el acceso a la plataforma, seguido del ingreso al módulo de administración y la sección de empresa.
 * Luego se completan los campos requeridos en el formulario, incluyendo datos generales, dirección
 * y configuraciones adicionales, para finalmente guardar el registro.
 */
test("Crear una nueva empresa", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de empresa
  const empresaPage = new EmpresaPage(page);
  await empresaPage.clickEmpresa();
  await empresaPage.clickNuevo();
  await empresaPage.fillRazonSocial("Empresa Test");
  await empresaPage.fillNombreComercial("Empresa Test");
  await empresaPage.fillRuc("12345678901");
  await empresaPage.selectDepartamento("Lima");
  await empresaPage.selectProvincia("Lima");
  await empresaPage.selectDistrito("Lima");
  await empresaPage.fillUrbanizacion("Urbanizacion Test");
  await empresaPage.fillCalle("Calle Test");
  await empresaPage.fillDireccion("Direccion Test");
  await empresaPage.fillTelefono("123456789");
  await empresaPage.selectCodificacion("1");
  // Configuraciones adicionales
  await empresaPage.clickConfiguraciones();
  await empresaPage.fillNumeroCodigoMarcacion("123456");
  await empresaPage.fillHoraExtra("10");
  await empresaPage.fillJornadaSemanal("5");
  await empresaPage.fillJornadaDiara("5");
  await empresaPage.fillHoraNocturna("5");
  await empresaPage.clickGuardar();

  await page.close();
});

/**
 * Test: Editar una Empresa
 * Descripción: Este test automatiza la modificación de una empresa ya registrada en el sistema.
 * Luego del login y navegación al módulo de administración, se accede al submódulo "Empresa",
 * se modifica un conjunto de campos de la empresa seleccionada y se guarda la información actualizada.
 */
test("Editar una nueva empresa", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de empresa
  const empresaPage = new EmpresaPage(page);
  await empresaPage.clickEmpresa();
  await empresaPage.clickNuevo();
  await empresaPage.fillRazonSocial("Empresa BI");
  await empresaPage.fillNombreComercial("Empresa BI");
  await empresaPage.fillRuc("2345678901");
  await empresaPage.fillUrbanizacion("Urbanizacion Test");
  await empresaPage.fillCalle("Calle Test");
  await empresaPage.fillDireccion("Direccion Test");
  await empresaPage.fillTelefono("984673609");
  await empresaPage.clickGuardar();

  await page.close();
});
