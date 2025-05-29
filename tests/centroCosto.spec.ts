import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CentroCostoPage } from "../pages/CentroCostoPage";

/**
 * Test: Crear un nuevo Centro de Costo
 * Descripción: Este test automatiza el flujo de creación de un nuevo centro de costo en el sistema.
 * Se realiza el login, navegación al módulo de administración, ingreso al formulario correspondiente,
 * llenado de campos requeridos y guardado del registro.
 */
test("Crear una nuevo centro de Costo", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de centros de costo
  const centroCosto = new CentroCostoPage(page);
  await centroCosto.clickCentroCosto();
  await centroCosto.clickNuevo();
  await centroCosto.fillNombreCentroCosto("test costo");
  await centroCosto.fillDescripcionCentroCosto("test");
  await centroCosto.clickGuardar();

  await page.close();
});

/**
 * Test: Editar un Centro de Costo
 * Descripción: Este test automatiza la edición de un centro de costo previamente registrado.
 * Se realiza el login, navegación al módulo de administración y sección correspondiente,
 * selección del registro a modificar, actualización de sus campos y guardado de los cambios.
 */
/**
test("Editar un centro de Costo", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de centros de costo
  const centroCosto = new CentroCostoPage(page);
  await centroCosto.clickCentroCosto();
  await centroCosto.clickEditar();
  await centroCosto.fillNombreCentroCosto("test costo");
  await centroCosto.fillDescripcionCentroCosto("test");
  await centroCosto.clickGuardar();

  await page.close();
}); */
