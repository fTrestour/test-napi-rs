#![deny(clippy::all)]

#[macro_use]
extern crate napi_derive;

use serde::{Deserialize, Serialize};

#[napi(constructor)]
#[derive(Serialize, Deserialize)]
pub struct Person {
  pub name: String,
  pub phones: Vec<String>,
}

#[napi]
pub fn parse(data: String) -> napi::Result<Person> {
  Ok(serde_json::from_str(&data)?)
}
