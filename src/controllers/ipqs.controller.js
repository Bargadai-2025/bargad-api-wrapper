import axios from "axios";
import { IPQS_API_KEY } from "../config/env.config.js";

export async function ResponsePhoneFromIPQS(req, res) {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({
        message: "Phone number is required",
      });
    }

    const url = `https://www.ipqualityscore.com/api/json/phone/${IPQS_API_KEY}/${phone}`;

    const response = await axios.get(url);
    const FIELD_MAP = {
      recent_abuse: "phone_recently_abused_activity",
      risky: "phone_risky_activity",
      spammer: "phone_spam",
      dialing_code: "phone_country_dialling_code",
      VOIP: "phone_internet_based",
      prepaid: "phone_prepaid",
      line_type: "phone_line_type",
      mnc: "phone_carrier_id_code",
      mcc: "phone_country_id_code",
      leaked: "phone_data_leaks",
      name: "phone_user_name",
      sms_email: "phone_sms_gateway_address",
      sms_domain: "phone_carrier_messaging_domain",
      country: "phone_country",
      city: "phone_region",
      zip_code: "phone_zip_code",
      timezone: "phone_timezone",
    };
    const rawData = response.data;

    const formattedData = Object.keys(FIELD_MAP).reduce((acc, key) => {
      acc[FIELD_MAP[key]] = rawData[key] ?? "N/A";
      return acc;
    }, {});

    res.status(200).json({
      message: "Data fetched successfully",
      status: 200,
      data: formattedData,
    });
  } catch (error) {
    console.log("IPQS ERROR:", error.response?.data || error.message);

    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function ResponseEmailFromIPQS(req, res) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const url = `https://www.ipqualityscore.com/api/json/email/${IPQS_API_KEY}/${email}`;

    const response = await axios.get(url);

    const rawData = await response?.data;

    const EMAIL_FIELD_MAP = {
      recent_abuse: "email_recent_abuse_activity",
      honeypot: "email_honeypot",
      spam_trap_score: "email_spam_trap_score",
      valid: "email_valid",
      disposable: "email_temporary",
      deliverability: "email_delivery_rate",
      catch_all: "email_accepts_all_mail",
      smtp_score: "email_sender_reputation_score",
      overall_score: "email_server_response_code",
      suggested_domain: "email_domain_corrected",
      suspect: "email_suspicious",
      dns_valid: "email_domain_is_active",
      spf_record: "email_allowed_senders_list",
      dmarc_record: "email_spoof_protection",
      leaked: "email_data_leaks",
      first_name: "email_user_name",
      common: "email_popular_domain",
      generic: "email_generic",
      frequent_complainer: "email_frequent_complaint_history",
      risky_tld: "email_risky_extension",
    };
    const formattedData = Object.keys(EMAIL_FIELD_MAP).reduce((acc, key) => {
      acc[EMAIL_FIELD_MAP[key]] = rawData[key] ?? "N/A";
      return acc;
    }, {});

    res.status(200).json({
      message: "Data fetched successfully",
      status: 200,
      data: formattedData,
    });
  } catch (error) {
    console.log(" ERROR:", error.response?.data || error.message);

    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}

export async function ResponseIpFromIPQS(req, res) {
  try {
    const { ip } = req.body;
    if (!ip) {
      return res.status(400).json({
        message: "IP is required",
      });
    }
    let url = `https://www.ipqualityscore.com/api/json/ip/${IPQS_API_KEY}/${ip}`;

    let response = await axios.get(url);
    let rawData = await response?.data;
    const IP_FIELD_MAP = {
      recent_abuse: "ip_recent_fraud",
      vpn: "ip_virtual_private_network (VPN)",
      active_vpn: "ip_active_vpn",
      tor: "ip_tor_network",
      active_tor: "ip_active_tor",
      proxy: "ip_proxy",
      bot_status: "ip_recent_bot_activity",
      country_code: "ip_country",
      timezone: "ip_timezone",
      organization: "ip_organization_",
      is_crawler: "ip_crawler_activity",
      mobile: "ip_connect_to_mobile",
    };

    let formattedData = Object.keys(IP_FIELD_MAP).reduce((acc, key) => {
      acc[IP_FIELD_MAP[key]] = rawData[key] ?? "N/A";
      return acc;
    }, {});

    res.status(200).json({
      message: "Data fetched successfully",
      status: 200,
      data: formattedData,
    });
  } catch (error) {
    console.log(" ERROR:", error.response?.data || error.message);

    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
}
