import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

// Test: Validar el inicio de sesión con diferentes credenciales
// Descripción: Este test verifica el comportamiento del sistema al intentar iniciar sesión
// con diferentes combinaciones de credenciales, incluyendo usuarios válidos, inválidos y campos vacíos.
test("Validar usuarios correctos", async ({ page }) => {
  test.info().annotations.push({ type: "feature", description: "Login" });
  test
    .info()
    .annotations.push({
      type: "story",
      description: "Inicio de sesión con credenciales válidas",
    });
  test.info().annotations.push({ type: "severity", description: "critical" });
  test.info().annotations.push({ type: "epic", description: "Autenticación" });
  const loginPage = new LoginPage(page);
  await loginPage.login("jleyva", "jleyva123");
});

// Test: Validar el inicio de sesión con usuarios incorrectos
test("Validar usuarios incorrectos", async ({ page }) => {
  test.info().annotations.push({ type: "feature", description: "Login" });
  test
    .info()
    .annotations.push({
      type: "story",
      description: "Inicio de sesión con credenciales inválidas",
    });
  test.info().annotations.push({ type: "severity", description: "critical" });
  test.info().annotations.push({ type: "epic", description: "Autenticación" });
  const loginPage = new LoginPage(page);
  await loginPage.login("jleyva", "jleyva1234");
});

// Test: Validar el inicio de sesión con usuarios vacíos
test("Validar usuarios vacíos", async ({ page }) => {
  test.info().annotations.push({ type: "feature", description: "Login" });
  test
    .info()
    .annotations.push({
      type: "story",
      description: "Inicio de sesión con credenciales vacías",
    });
  test.info().annotations.push({ type: "severity", description: "critical" });
  test.info().annotations.push({ type: "epic", description: "Autenticación" });
  const loginPage = new LoginPage(page);
  await loginPage.login("", "");
});
