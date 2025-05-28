import test from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { CargoPage } from "../pages/CargoPage";

/**
 * Test: Crear un nuevo Cargo
 * Descripción: Este test automatiza el proceso de registro de un nuevo cargo dentro del sistema.
 * Se inicia sesión, se accede al módulo de administración y posteriormente a la sección de cargos.
 * Luego se llena el formulario con datos válidos y se guarda el registro.
 */

test("Crear un nuevo cargo", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de cargos
  const cargoPage = new CargoPage(page);
  await cargoPage.clickCargo();
  await cargoPage.clickNuevo();
  await cargoPage.fillNombreCargo("Seguridad");
  await cargoPage.fillDescripcionCargo("Local Lima");
  await cargoPage.clickGuardar();

  await page.close();
});

/**
 * Test: Modificar un Cargo existente
 * Descripción: Este test automatiza el proceso de modificación de un cargo previamente registrado.
 * Se inicia sesión, se accede al módulo de administración y posteriormente a la sección de cargos.
 * Luego se selecciona el cargo a modificar, se actualizan los datos y se guarda el registro.
 */

test("Modificar un cargo", async ({ page }) => {
  await page.goto("https://itimecontrol.datatech.com.pe/login.aspx");
  // Iniciar sesión
  const logueo = new LoginPage(page);
  await logueo.fillUsername("jleyva");
  await logueo.fillPassword("jleyva123");
  await logueo.clickLogin();
  // Navegar al módulo de administración
  const homePage = new HomePage(page);
  await homePage.clickModuloAdministracion();
  // Acceder a la sección de cargos
  const cargoPage = new CargoPage(page);
  await cargoPage.clickCargo();
  await cargoPage.clickEditar();
  await cargoPage.fillNombreCargo("Seguridad Modificado");
  await cargoPage.fillDescripcionCargo("Local Lima Modificado");
  await cargoPage.clickGuardar();

  await page.close();
}
);