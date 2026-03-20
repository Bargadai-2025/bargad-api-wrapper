import axios from "axios";
import { ONGRID_API_KEY } from "../config/env.config.js";

export async function ResponsePhoneFromOngrid(req, res) {
  try {
    const { mobile } = req.body;

    if (!mobile) {
      return res.status(400).json({
        message: "Mobile number is required",
      });
    }

    const url = "https://api.gridlines.io/profile-api/mobile/number-age";

    const response = await axios.post(
      url,
      {
        mobile_number: mobile,
        consent: "Y",
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-API-Key": ONGRID_API_KEY,
          "X-Auth-Type": "API-Key",
        },
      },
    );

    // let rawData = await response.data?.data?.mobile_number_age_data;
    const rawData =
      response.data?.data?.mobile_number_age_data || response.data;

    const ONGRID_FIELD_MAP = {
      has_porting_history: "phone_ported",
      mobile_age: "phone_vintage",
      is_number_active: "phone_active",
      is_number_valid: "phone_valid",
      original_region: "phone_region",
      original_telecom_provider: "phone_carrier",
      roaming: "phone_roaming",
    };

    const formattedData = Object.keys(ONGRID_FIELD_MAP).reduce((acc, key) => {
      acc[ONGRID_FIELD_MAP[key]] = rawData[key] ?? "N/A";
      return acc;
    }, {});

    res.status(200).json({
      message: "data fetched successfully",
      status: 200,
      data: formattedData,
    });
  } catch (error) {
    console.log(" ERROR:", error.response?.data || error.message);

    res.status(500).json({
      message: "Internal server error",
      error: error.response?.data || error.message,
    });
  }
}
