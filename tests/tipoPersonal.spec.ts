import test from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SubAreaPage } from "../pages/SubAreaPage";
import { TipoPersonalPage } from "../pages/TipoPersonal";

/**
 * Test: Crear una Tipo Personal nueva
 * Descripción: Este test automatiza el proceso de creación de un nuevo tipo de personal en el sistema.
 * Se realiza el login, se accede al módulo de administración y a la sección "Tipo Personal".
 * Luego se llena el formulario con los datos requeridos y se guarda el nuevo registro.
 */

test("Crear una Tipo Personal nueva", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");

  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();

  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();

  const tipoPersonal = new TipoPersonalPage(page);
  await tipoPersonal.clickTipoPersonal();
  await tipoPersonal.clickNuevo();
  await tipoPersonal.fillNombreTipoPersonal("Sub Area Test");
  await tipoPersonal.fillDescripcionTipoPersonal("Sub Area Test");
  await tipoPersonal.clickGuardar();

  await page.close();
});

/**
 * Test: Editar una Tipo Personal
 * Descripción: Este test automatiza la edición de un tipo de personal existente.
 * Después del inicio de sesión, se accede al módulo de administración, se ingresa a la sección "Tipo Personal",
 * se selecciona un registro para editar, se modifican los campos necesarios y se guarda el cambio.
 */
test("Editar una Tipo Personal", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");

  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();

  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();

  const tipoPersonal = new TipoPersonalPage(page);
  await tipoPersonal.clickTipoPersonal();
  await tipoPersonal.clickEditar();
  await tipoPersonal.fillNombreTipoPersonal("Sub Area Test2");
  await tipoPersonal.fillDescripcionTipoPersonal("Sub Area Test2");
  await tipoPersonal.clickGuardar();

  await page.close();
});